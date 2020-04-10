import { Component } from 'react';
import io from 'socket.io-client';
import Router from 'next/router';
import secureTemplate from '../static/secure-template';

class Watcher extends Component {
    constructor(props){
        super(props);
    }

    //function to toggle elements upon navigation of recipes
    toggle(){
        let video = document.getElementById('video');
        let steps = document.getElementById('steps');
        let msg = document.getElementById('msg');
        let send_btn = document.getElementById('send_btn');
        let icon = document.getElementById('icon');
        let streams = document.getElementById('pickstream');
        video.hidden = !video.hidden;
        steps.hidden = !steps.hidden;
        if (steps.hidden) {
            steps.style.display = 'none';
        }
        else {
            steps.style.display = 'list-item';
        }
        msg.hidden = !msg.hidden;
        send_btn.hidden = !send_btn.hidden;
        icon.hidden = !icon.hidden;
        streams.hidden = !streams.hidden;
    }

    componentDidMount(){
        this.socket=io('/stream');

        let peerConnection;
        const video = document.getElementById('video');
        const steps = document.getElementById('steps');

        //Toggle elements off before choosing stream
        this.toggle();

        //broadcast the watcher is connected to
        let currBroadcast;

        //video properties
        let width = (window.innerWidth < 1500) ? window.innerWidth : 1500;
        let height;
        let videoWidth;
        let videoHeight;

        // Stream pop-up messaging variables
        const messageBox = document.getElementById('send_btn');
        const data = document.getElementById('data');
        let speech = new SpeechSynthesisUtterance();

        // on message submission, emit steam_popup signal
        messageBox.addEventListener("click", event => {
            let message = data.value;
            msg.reset();
            //params: signal, broadcast id to emit to, message
            this.socket.emit('stream_popup', currBroadcast, message);
        });

        //signal to synthesize message
        this.socket.on('message_synth', (id, message) => {
            if (id == currBroadcast) {
                speech.text = message;
                window.speechSynthesis.speak(speech);
            }
        });

        //offer from broadcaster
        this.socket.on('offer', (id, message, config) => {
            peerConnection = new RTCPeerConnection(config);
            peerConnection.setRemoteDescription(message)
                .then(() => peerConnection.createAnswer())
                .then(sdp => peerConnection.setLocalDescription(sdp))
                .then(() => {
                    console.log("WATCHER EMITS answer");
                    this.socket.emit('answer', id, peerConnection.localDescription);
                });
            peerConnection.ontrack = function(event) {
                video.srcObject = event.streams[0];
                console.log(video.videoHeight, video.videoWidth);
            };
            peerConnection.onicecandidate = iceEvent => {
                if (iceEvent.candidate) {
                    this.socket.emit('candidate', id, iceEvent.candidate);
                }
            };
        });

        //after mounting the video, need to check size
        video.onresize = () => {
            if (!videoWidth || !videoHeight){
                let vRatio = video.videoWidth / video.videoHeight;
                height = width / vRatio;
                videoHeight = 0.7 * height;
                videoWidth = 0.7 * width;
                video.width = videoWidth;
                video.height = videoHeight;
                steps.style.maxWidth = `${0.3 * width}px`;
                steps.style.height = `${videoHeight}px`;
            }
            
        };

        // this.socket.on('connect', () => {
        //     this.socket.emit('watcher');
        // });
        
        this.socket.on('broadcaster', () => {
            this.socket.emit('watcher');
        });

        //server offers choices of streams
        this.socket.on('stream_choice', (broadcasters) => {
            //display onto dom
            let pickstream = document.getElementById('pickstream');
            Object.keys(broadcasters).forEach( (broadcast) => {
                let recipe = broadcasters[broadcast][0];
                let streamer = broadcasters[broadcast][1];
                pickstream.innerHTML = pickstream.innerHTML + `
                    <div id="${broadcast}" onMouseOver="this.style.background='#87CEFA';" onMouseOut="this.style.background='#F0F8FF';" style="display:flex;flex-direction:column;align-items:center;margin:20px;border:2px solid #067df7;padding:3px;box-shadow:5px 5px 2px grey;background: #F0F8FF;">
                        <div>
                            <div style="font-size: 30px;">${streamer}'s Stream</div>
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:center;">
                            <div style="font-size: 20px;color:DarkBlue;">${recipe.title}</div>
                            <img src="${recipe.image}" height="100" style="border:1px solid #067df7;margin:5px;"/>
                        </div>
                    </div>
                `;

            });
            //add event listeners to choices in dom
            Object.keys(broadcasters).forEach((broadcast) => {
                document.getElementById(broadcast).addEventListener("click", () => {
                    //toggle UI elements
                    this.toggle();
                    currBroadcast = broadcast;
                    this.socket.emit('stream_chosen', broadcast);
                    //set the name of the stream to chosen broadcaster's stream
                    let recipe = broadcasters[broadcast][0];
                    let streamer = broadcasters[broadcast][1];
                    document.getElementById('title').innerHTML = `${streamer}'s ${recipe.title}`;
                    
                });
            });
        });

        this.socket.on('candidate', (id, candidate) => {
            console.log("CANDIDATE RECEIVED IN WATCHER: " + candidate);
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
            .catch(err => console.error(err));
        });

        this.socket.on('recipe_data', (data) => {
            let instructions = data.analyzedInstructions[0].steps;
            instructions.forEach(instruction => {
                steps.innerHTML = steps.innerHTML + `
                    <li style="padding-top:10px;padding-bottom:10px;padding-right:10px;">
                        ${instruction.step}
                    </li>
                    <hr class="solid">
                `;
            });

        });

        this.socket.on('stream_data', (viewCount) => {
            document.getElementById('stream_count').innerHTML = `${viewCount}`;
        });

        //signal from broadcaster disconnecting
        this.socket.on('dc', (broadcast) => {
            let doc = document.getElementById(broadcast);
            if (doc){
                doc.parentNode.removeChild(doc);
            }
            if(broadcast == currBroadcast){
                peerConnection.close();
            }
            
        });

        //logic for leaving/disconnecting
        Router.beforePopState(({url, as, options}) => {
            if(as !== "/" || as !== "/other") {
                window.location.href = as;
                return false;
            }
        });

    }
    render(){
        return(
            <div>
                <div className="main">
                    <div className="body">
                        <div id="title" className="title"></div>
                        <div className="content">
                            <div className="content_items">
                                <video id="video" className="video" autoPlay controls>
                                </video> 
                            </div>
                            <div className="content_items">
                               <ol id="steps" className="steps">
                                </ol> 
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div id="stream_stats" className="stream_stats">
                            <img src="/viewer.png" id="icon" className="viewer_icon"/>
                            <div id="stream_count" className="stream_count">
                            </div>
                        </div>
                    </div>
                    <div id="message_box" className="message_box">
                        <form id="msg" className="form">
                            <textarea type="text" id="data" className="textarea" name="data"/>
                        </form>
                        <button type="button" id="send_btn">
                            Send
                        </button>
                    </div>
                    <div id="pickstream" hidden>
                    </div>
                </div>
                <style jsx>{`
                    .main{
                        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
                        'Arial', sans-serif;
                        padding: 20px 20px 60px;
                        max-width: 1500px;
                        margin: 0 auto;
                    }
                    .body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .title {
                        font-size: 40px;
                        padding-bottom: 20px;
                        color: #067df7;
                    }
                    .content {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        box-shadow: 5px 2px 2px grey;
                    }
                    .content_items {
                        display: flex;
                    }
                    .video {
                        margin: 0px;
                        background: #067df7
                    }
                    .steps {
                        display: list-item;
                        float: left;
                        clear: both;
                        border: 1px solid gray;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        padding-inline-start: 25px;
                        overflow: scroll;
                        background: white;
                    }
                    .stream_stats {
                        display: flex;
                        flex-direction: row;
                        position: relative;
                        padding: 5px;
                        background: #067df7;
                    }
                    .viewer_icon {
                        height: 25px;
                        width: 25px;
                        padding-right: 5px;
                    }
                    .stream_count {
                        padding-top: 5px;
                    }
                    .bottom {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        background: #067df7;
                        box-shadow: 5px 5px 2px grey;
                    }
                    .message_box {
                        display: flex;
                        flex-direction: row;
                        margin-top: 10px;
                    }
                    .form {
                        width: 99%;
                    }
                    .textarea {
                        width: 99%;
                    }
                    .pickstream {
                        display: flex;
                        flex-direction: column;
                    }
                `}
                </style>
            </div>
            
        )
    }
}
export default secureTemplate(Watcher);