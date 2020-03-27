import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';
import Auth from '../lib/Auth';



/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

const auth = new Auth();


export default class Broadcaster extends Component {

    componentDidMount(){
        var user_data = localStorage.getItem('user_details');
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!isLoggedIn || !user_data){
            window.location.replace('/');
        }

        this.socket=io('/stream');
        
        const peerConnections = {};
        const video = document.getElementById('video');

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

        this.socket.on('watcher', (id, config) => {
            console.log("8) BROADCASTER RECEIVES watcher");
            const peerConnection = new RTCPeerConnection(config);
            peerConnections[id] = peerConnection;
            let stream = video.srcObject;
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
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