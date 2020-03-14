import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import { Video } from '../components/Video';
import Router from 'next/router';

/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

export default class Medium extends Component {
    constructor(props){
        super(props);

        this.state={
            hello:''
        }
    }
    componentDidMount(){
        this.socket=io()

        let peerConnection;
        let video = document.getElementById('video');

        this.socket.on('offer', (id, message) => {
            console.log("8) WATCHER RECEIVES offer");
            const peerConnection = new RTCPeerConnection();
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
            }
        });

        this.socket.on('connect', () => {
            this.socket.emit('watcher');
        });
        
        this.socket.on('broadcaster', () => {
            console.log("3) WATCHER RECEIVES broadcaster AND EMITS watcher");
            this.socket.emit('watcher');
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
            </div>
            
        )
    }
}