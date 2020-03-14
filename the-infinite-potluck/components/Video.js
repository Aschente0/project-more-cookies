import * as React from 'react';
import { Portal } from './Portal';
import io from 'socket.io-client';

export class Video extends React.Component {
    
    // WEBCAM VIDEO PLAYBACK; WORKING
    // componentDidMount(){
    //     const video = document.getElementById('videoElement');
    //     console.log("VIDEO: " + video);
    //     navigator.mediaDevices.getUserMedia({video: true, audio: true})
    //         .then((stream) => {video.srcObject=stream})
    //         .catch(function (err0r) {
    //             console.log("Something went wrong!");
    //         });
    // }

    componentDidMount(){
        const video = document.getElementById('videoElement');
        console.log("VIDEO: " + video);

        const peerConnection = new RTCPeerConnection();
        const socket = io();

        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((stream) => {
                peerConnection.addStream(stream);
                peerConnection.createOffer()
                    .then(sdp => peerConnection.setLocalDescription(sdp))
                    .then(function(){
                        socket.emit('offer', peerConnection.localDescription);
                    });
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });

        socket.on('answer', function (message){
            peerConnection.setRemoteDescription(message);
        });

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => { video.srcObject = stream })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }

    render() {
        return (
            <>
                <video id="videoElement" autoPlay>
                </video>
                <p> video component </p>
            </>
        )
    }
}