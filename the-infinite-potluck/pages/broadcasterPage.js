import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import { Video } from '../components/Video';

const formatName = user => user.firstName + ' ' + user.lastName

const Welcome = ({ user }) => <p>Welcome, {formatName(user)}!</p>

export default class Broadcast extends Component {
    
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
                document.getElementById("videoElement").srcObject = stream;
                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
                peerConnection.createOffer()
                    .then(sdp => peerConnection.setLocalDescription(sdp))
                    .then(function(){
                        console.log("OFFER: " + peerConnection.localDescription);
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


    // componentDidMount(){
    //     const video = document.getElementById('videoElement');
    //     console.log("VIDEO: " + video);

    //     const peerConnection = new RTCPeerConnection();
    //     const socket = io();

    //     navigator.mediaDevices.getUserMedia({video: true, audio: true})
    //         .then((stream) => {
    //             peerConnection.addStream(stream);
    //             peerConnection.createOffer()
    //                 .then(sdp => peerConnection.setLocalDescription(sdp))
    //                 .then(function(){
    //                     socket.emit('offer', peerConnection.localDescription);
    //                 });
    //         })
    //         .catch(function (err0r) {
    //             console.log("Something went wrong!");
    //         });

    //     socket.on('answer', function (message){
    //         peerConnection.setRemoteDescription(message);
    //     });

    //     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //         .then((stream) => { video.srcObject = stream })
    //         .catch(function (err0r) {
    //             console.log("Something went wrong!");
    //         });
    // }

    // render() {
    //     return (
    //         <>
    //             <video id="videoElement" autoPlay>
    //             </video>
    //             <p> video component </p>
    //         </>
    //     )
    // }
}




//WORKING VIDEO CAMERA
/*
export default () => (
    <Video />
)
*/

//ALSO WORKS

// const BroadcasterPage = () => (
//     <Video />
// )
// export default BroadcasterPage;


// const BroadcasterPage = () => {
    

//     document.querySelector('cam').innerHTML='wew';

//     return(
//             <Text name="wew"/>
//     )
//     return (
//         <div>
//             <video playsInline autoPlay muted></video>
//             <script type="text/javascript">


//                 const video = document.querySelector('video');
//                 navigator.mediaDevices.getUserMedia({video: true, audio: true})
//                 .then((stream) => {video.srcObject=stream});
//             </script>
//             <p> broadcaster page </p>
//         </div>
//     )

// }
// export default BroadcasterPage;
