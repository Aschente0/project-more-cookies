import { Component } from 'react';
import io from 'socket.io-client';
import Router from 'next/router';
import secureTemplate from '../static/secure-template';
import { CpsContext } from 'twilio/lib/rest/preview/trusted_comms/cps';
import Video from 'twilio/lib/rest/Video';



/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/


class Broadcaster extends Component {
    componentDidMount(){
        this.socket=io('/stream');
        
        const peerConnections = {};
        // const video = document.getElementById('video');
        const canvas = document.getElementById('canvas').getContext('2d');
        const messageBox = document.getElementById('send_btn');
        const data = document.getElementById('data');
        const video = document.createElement('video');
        video.setAttribute('autoplay', true);
        let messages = [];
        let message = "";
        let pause = false;
        let speech = new SpeechSynthesisUtterance();

        const drawToCanvas = () => {
            canvas.drawImage(video, 0, 0, 640, 480);
            canvas.font = "20px Comic Sans MS";
            canvas.fillStyle = "blue";
            // draw message for 5 seconds, pause for 2 seconds before drawing new message
            if((messages.length) && (message == "") && !pause) {
                //first grab message from queue of messages received
                message = messages.shift();
                //emit signal with message for watches to synthesize text
                this.socket.emit('message_synth', message);
                console.log("BROADCASTER EMITS message_synth");
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
            canvas.fillText(message, 10, 50);
            requestAnimationFrame(drawToCanvas);
        }

        //signal for stream pop-up
        this.socket.on('stream_popup', message => {
            console.log("BROADCASTER RECEIVED stream_popup");
            messages.push(message);
            console.log(messages);
        });

        // navigator.mediaDevices.getUserMedia({video: true, audio: true})
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then((stream) => {
                video.srcObject = stream;
                drawToCanvas();
                console.log("1) BROADCASTER EMITS broadcaster");
                this.socket.emit('broadcaster');
            })
            .catch(function (err) {
                console.log(err);
            });

        this.socket.on('answer', function (id, description){
            console.log("13) BROADCASTER RECEIVES answer, SETS RD");
            peerConnections[id].setRemoteDescription(description);
        });

        this.socket.on('watcher', (id, config) => {
            console.log("8) BROADCASTER RECEIVES watcher");
            const peerConnection = new RTCPeerConnection(config);
            peerConnections[id] = peerConnection;
            let stream = document.getElementById('canvas').captureStream();
            navigator.mediaDevices.getUserMedia({audio: true, video: false})
                .then(aStream => {
                    aStream.getAudioTracks().forEach( (track) => {
                        console.log("combining audio track");
                        stream.addTrack(track);

                        stream.getTracks().forEach(track => {
                            console.log("ADDING TRACK: " + track);
                            peerConnection.addTrack(track, stream);
                        });
                        peerConnection.createOffer()
                        .then(sdp => peerConnection.setLocalDescription(sdp))
                        .then( () => {
                            console.log("9) BROADCASTER EMITS offer")
                            this.socket.emit('offer', id, peerConnection.localDescription);
                        });
                        peerConnection.onicecandidate = iceEvent => {
                            if (iceEvent.candidate) {
                                console.log("CANDIDATE EMIT FROM BROADCASTER: " + iceEvent.candidate);
                                this.socket.emit('candidate', id, iceEvent.candidate);
                            }
                        };
                    });
                });
        });

        this.socket.on('candidate', (id, candidate) => {
            console.log("CANDIDATE RECEIVED IN BROADCASTER: " + candidate);
            peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
        });

        this.socket.on('dc', id => {
            console.log("BROADCASTER RECEIVED DISCONNECT");
            if(peerConnections[id]){
                peerConnections[id].close();
                delete peerConnections[id];
            }
        });

        Router.beforePopState(({url, as, options}) => {
            console.log("ATTEMPTING TO DISCONNECT AS BROADCASTER");
            if(as !== "/" || as !== "/other") {
                window.location.href = as;
                return false;
            }
        });



    }    
    render(){
        return(
            <div>
                <canvas width="640" height="480" id="canvas" autoPlay>
                </canvas>
                <form id="msg" className="search">
                    <textarea type="text" id="data" name="data"/>
                    <button type="button" id="send_btn">
                           Send
                    </button>
                </form>
            </div>
            
        )
    }
}
export default secureTemplate(Broadcaster);