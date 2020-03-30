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
        let video = document.getElementById('video');

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
                console.log("MOUNT VIDEO, STREAMS: " + event.streams[0] + " ACTIVE: " + event.streams[0].active);
                document.getElementById('video').srcObject = event.streams[0];
            };
            peerConnection.onicecandidate = iceEvent => {
                if (iceEvent.candidate) {
                    this.socket.emit('candidate', id, iceEvent.candidate);
                }
            };
        });

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
                pickstream.innerHTML = pickstream.innerHTML + `<button id="${broadcast}">${broadcast}</button>`;

            });

            Object.keys(broadcasters).forEach( (broadcast) => {
                document.getElementById(broadcast).addEventListener("click", () => {
                    console.log("6) WATCHER HAS CHOSEN A STREAM");
                    this.socket.emit('stream_chosen', broadcast);
                });
            });
        });

        this.socket.on('candidate', (id, candidate) => {
            console.log("CANDIDATE RECEIVED IN WATCHER: " + candidate);
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
            .catch(err => console.error(err));
        });

        this.socket.on('dc', () => {
            console.log("WATCHER RECEIVED DISCONNECT");
            peerConnection.close();
        });

        Router.beforePopState(({url, as, options}) => {
            console.log("ATTEMPTING TO DISCONNECT AS WATCHER");
            if(as !== "/" || as !== "/other") {
                window.location.href = as;
                return false;
            };
        });

    }
    render(){
        return(
            <div>
                <video id="video" width="640" height="480" autoPlay >
                </video>
                <div id="pickstream">
                </div>
            </div>
            
        )
    }
}
export default secureTemplate(Watcher);