import { Component } from 'react';
import io from 'socket.io-client';
import Router from 'next/router';
import secureTemplate from '../static/secure-template';

/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/


class Watcher extends Component {
    constructor(props){
        super(props);

        this.state={
            broadcasters: []
        }
    }

    componentDidMount(){

        this.socket=io('/stream');

        let peerConnection;
        const video = document.getElementById('video');
        const steps = document.getElementById('steps');
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
            console.log(message);
            //params: signal, broadcast id to emit to, message
            this.socket.emit('stream_popup', currBroadcast, message);
            console.log("WATCHER EMITS stream_popup");
        });

        //signal to synthesis message
        this.socket.on('message_synth', (id, message) => {
            console.log("WATCHER RECEIVES message_synth");
            console.log("ID: " + id + " currBroadcast: " + currBroadcast);
            if (id == currBroadcast) {
                speech.text = message;
                window.speechSynthesis.speak(speech);
            }
        });

        this.socket.on('offer', (id, message, config) => {
            console.log("11) WATCHER RECEIVES offer");
            peerConnection = new RTCPeerConnection(config);
            peerConnection.setRemoteDescription(message)
                .then(() => peerConnection.createAnswer())
                .then(sdp => peerConnection.setLocalDescription(sdp))
                .then(() => {
                    console.log("WATCHER EMITS answer");
                    this.socket.emit('answer', id, peerConnection.localDescription);
                });
            peerConnection.ontrack = function(event) {
                // console.log("MOUNT VIDEO, STREAMS: " + event.streams[0] + " ACTIVE: " + event.streams[0].active);
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
                console.log(video.width, video.height);
            }
            
        };


        this.socket.on('connect', () => {
            console.log("watcher connected");
            this.socket.emit('watcher');
        });
        
        this.socket.on('broadcaster', () => {
            console.log("3) WATCHER RECEIVES broadcaster AND EMITS watcher");
            this.socket.emit('watcher');
        });

        this.socket.on('stream_choice', (broadcasters) => {
            console.log("5) WATCHER CHOOSING STREAM");
            console.log(Object.keys(broadcasters));

            let pickstream = document.getElementById('pickstream');
            Object.keys(broadcasters).forEach( (broadcast) => {
                console.log("BROADCASTER: " + broadcast);
                pickstream.innerHTML = pickstream.innerHTML + `
                    <button id="${broadcast}">${broadcasters[broadcast]}</button>
                `;

            });

            Object.keys(broadcasters).forEach((broadcast) => {
                document.getElementById(broadcast).addEventListener("click", () => {
                    console.log("6) WATCHER HAS CHOSEN A STREAM");
                    currBroadcast = broadcast;
                    this.socket.emit('stream_chosen', broadcast);
                    //set the name of the stream to chosen broadcaster's stream
                    document.getElementById('title').innerHTML = `${broadcasters[broadcast]}`;
                });
            });
        });

        this.socket.on('candidate', (id, candidate) => {
            console.log("CANDIDATE RECEIVED IN WATCHER: " + candidate);
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
            .catch(err => console.error(err));
        });

        this.socket.on('recipe_data', (data) => {
            console.log("WATCHER RECEIVES recipe_data");
            console.log("DATA: " + data.title);
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
            console.log("WATCHER RECEIVES stream_data");
            console.log(viewCount);
            document.getElementById('stream_count').innerHTML = `${viewCount}`;
        });

        this.socket.on('dc', (broadcast) => {
            console.log("WATCHER RECEIVED DISCONNECT");
            let doc = document.getElementById(broadcast);
            if (doc){
                doc.parentNode.removeChild(doc);
            }
            if(broadcast == currBroadcast){
                peerConnection.close();
            }
            
        });

        Router.beforePopState(({url, as, options}) => {
            console.log("ATTEMPTING TO DISCONNECT AS WATCHER");
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
                        <div id="title" className="title">
                        </div>
                        <div className="content">
                            <div className="content_items">
                                <video id="video" autoPlay>
                                </video> 
                            </div>
                            <div className="content_items">
                               <ol id="steps" className="steps">
                                </ol> 
                            </div>
                        </div>
                        <div id="stream_stats" className="stream_stats">
                            <img src="/viewer.png" className="viewerIcon"/>
                            <div id="stream_count">
                            </div>
                        </div>
                        <form id="msg">
                            <textarea type="text" id="data" name="data"/>
                            <button type="button" id="send_btn">
                                Send
                            </button>
                        </form>
                    </div>

                    <div id="pickstream">
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
                    }
                    .content {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    .content_items {
                        display: inline-block;
                    }
                    .canvas {
                        border: 1px solid blue;
                    }
                    .steps {
                        display: list-item;
                        float: left;
                        clear: both;
                        border: 1px solid blue;
                        margin-top: 1px;
                        padding-inline-start: 25px;
                        overflow: scroll;
                    }
                    .stream_stats {
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                    }
                    .viewerIcon {
                        height: 50px;
                        width: 50px;
                    }
                `}
                </style>
            </div>
            
        )
    }
}
export default secureTemplate(Watcher);