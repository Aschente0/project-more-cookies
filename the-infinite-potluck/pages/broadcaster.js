import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';

/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

export default class Broadcaster extends Component {
    componentDidMount(){
        this.socket=io('/stream');
        
        const peerConnections = {};
        const video = document.getElementById('video');
        const peerConnection = new RTCPeerConnection();
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((stream) => {
                video.srcObject = stream;
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

        this.socket.on('watcher', id => {
            console.log("8) BROADCASTER RECEIVES watcher");
            const peerConnection = new RTCPeerConnection();
            peerConnections[id] = peerConnection;
            let stream = video.srcObject;
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            peerConnection.createOffer()
            .then(sdp => peerConnection.setLocalDescription(sdp))
            .then( () => {
                console.log("9) BROADCASTER EMITS offer")
                this.socket.emit('offer', id, peerConnection.localDescription);
            });
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
            };
        });
    }    
    render(){
        return(
            <div>
                <video id="video" autoPlay>
                </video>
            </div>
            
        )
    }
}