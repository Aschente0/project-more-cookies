import { Component } from 'react';
import io from 'socket.io-client';
import Router from 'next/router';
import secureTemplate from '../static/secure-template';

class Broadcaster extends Component {
    componentDidMount(){
        //the canvas to edit the video stream
        let canvasComp = document.getElementById('canvas');
        this.socket=io('/stream');
        let recipe;
        //the dom element that holds the recipe steps
        let steps = document.getElementById('steps');
        //get the recipe that is stored in local storage from the previous step and populate the recipe component in dom
        if(localStorage.getItem('data')) {
            recipe = JSON.parse(localStorage.getItem('data'));
            document.getElementById('title').innerHTML = `${this.props.loggedInUser.nickname}'s ${recipe.title}`;
            let instructions = recipe.analyzedInstructions[0].steps;
            instructions.forEach(instruction => {
                steps.innerHTML = steps.innerHTML + `
                    <li style="padding-top:10px;padding-bottom:10px;padding-right:10px;">
                        ${instruction.step}
                    </li>
                    <hr class="solid">
                `;
            });
        }
        // the list of peer connections for this broadcast
        const peerConnections = {};
        let peerCount = 0;
        //dom element for number of viewers
        document.getElementById('stream_count').innerHTML = `${peerCount}`;

        const canvas = document.getElementById('canvas').getContext('2d');
        const video = document.createElement('video');
        video.setAttribute('autoplay', true);

        //stream popup message list
        let messages = [];
        let message = "";
        let pause = false;
        //speech synthesis api
        let speech = new SpeechSynthesisUtterance();

        //video properties
        let width = (window.innerWidth < 1500) ? window.innerWidth : 1500;
        let height;
        let videoWidth;
        let videoHeight;

        //stream message popup logic
        const drawToCanvas = () => {
            canvas.drawImage(video, 0, 0, videoWidth, videoHeight);
            let font = Math.floor(videoWidth/30);
            canvas.font = `${font}px Comic Sans MS`;
            canvas.fillStyle = "blue";
            // draw message for 5 seconds, pause for 2 seconds before drawing new message
            if((messages.length) && (message == "") && !pause) {
                //first grab message from queue of messages received
                message = messages.shift();
                //emit signal with message for watches to synthesize text
                this.socket.emit('message_synth', message);
                //ready the local text synthesis for broadcaster to hear
                speech.text = message;
                window.speechSynthesis.speak(speech);
                //logic to space out the message synthesis frequency for naturality
                speech.onend = e => {
                    setTimeout(function() {
                        pause = true;
                        message = "";
                    }, 2000);
                    setTimeout(function() {
                        pause = false;
                    }, 5000);
                };
            }
            let max_chars = Math.floor((videoWidth) / font);
            let line;
            for (line = 1; line <= Math.ceil(message.length / max_chars); line++){
                canvas.fillText(message.substring((line-1) * max_chars, Math.min(line * max_chars, message.length)), 10, (line-1)*font + 30);
            }
            requestAnimationFrame(drawToCanvas);
        };

        //signal for stream pop-up
        this.socket.on('stream_popup', message => {
            messages.push(message);
        });

        /* signals to establish peer connection */
        //get video from webcam, and start setting up video/canvas size with the information
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then((stream) => {
                //get video info
                let vtrack = stream.getVideoTracks()[0].getSettings();
                const vRatio = (vtrack.width / vtrack.height);
                height = width / vRatio;
                //size up canvas and streamPlugin accordingly
                videoWidth = 0.7 * width;
                videoHeight = 0.7 * height;
                canvasComp.width = videoWidth;
                canvasComp.height = videoHeight;
                steps.style.maxWidth = `${0.3 * width}px`;
                steps.style.height = `${videoHeight}px`;
                video.srcObject = stream;
                drawToCanvas();
                this.socket.emit('broadcaster', recipe, this.props.loggedInUser.nickname);
            })
            .catch(function (err) {
                console.log(err);
            });

        this.socket.on('watcher', (id, config) => {
            const peerConnection = new RTCPeerConnection(config);
            peerConnections[id] = peerConnection;
            peerCount++;
            document.getElementById('stream_count').innerHTML = `${peerCount}`;

            //Send over stream to connected watcher
            let stream = document.getElementById('canvas').captureStream();
            navigator.mediaDevices.getUserMedia({audio: true, video: false})
                .then(aStream => {
                    aStream.getAudioTracks().forEach( (track) => {
                        stream.addTrack(track);

                        stream.getTracks().forEach(track => {
                            peerConnection.addTrack(track, stream);
                        });
                        peerConnection.createOffer()
                        .then(sdp => peerConnection.setLocalDescription(sdp))
                        .then( () => {
                            this.socket.emit('offer', id, peerConnection.localDescription);
                            // send over initial recipe of the stream
                            this.socket.emit('recipe_data', id, recipe);
                        });
                        peerConnection.onicecandidate = iceEvent => {
                            if (iceEvent.candidate) {
                                this.socket.emit('candidate', id, iceEvent.candidate);
                            }
                        };
                    });
                });
            //Here, we can send over viewer data of the stream; updates every time a watcher connnects
            this.socket.emit('stream_data', Object.keys(peerConnections), peerCount);
        });

        this.socket.on('answer', function (id, description){
            peerConnections[id].setRemoteDescription(description);
        });

        this.socket.on('candidate', (id, candidate) => {
            peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
        });

        //signal from watcher disconnecting
        this.socket.on('dc', id => {
            if(peerConnections[id]){
                peerConnections[id].close();
                delete peerConnections[id];
                peerCount--;
                document.getElementById('stream_count').innerHTML = `${peerCount}`;
                this.socket.emit('stream_data', Object.keys(peerConnections), peerCount);
            }
        });

        //logic for leaving/disconnecting
        Router.beforePopState(({url, as, options}) => {
            // clear recipe data
            if(localStorage.getItem('data')) {
                localStorage.removeItem('data');
            }
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
                               <canvas id="canvas" className="canvas" autoPlay >
                                </canvas> 
                            </div>
                            <div className="content_items">
                               <ol id="steps" className="steps">
                                </ol> 
                            </div>
                        </div>
                    </div>
                    <div className="bottom" >
                        <div id="stream_stats" className="stream_stats">
                            <img src="/viewer.png" id="icon" className="viewer_icon" />
                            <div id="stream_count" className="stream_count"></div>
                        </div>
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
                    .canvas {
                        border: 1px solid gray;
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
                `}
                </style> 
            </div>
            
        )
    }
}

export default secureTemplate(Broadcaster);