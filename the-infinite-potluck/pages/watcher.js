import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';

export default class Medium extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         hello:''
    //     }
    // }

    // componentDidMount(){
    //     this.socket=io()
    //     this.socket.emit('watcher');
    //     this.socket.on('now', (data) => {
    //         this.setState({
    //             hello: data.message
    //         })
    //     })
    // }
    
    // render(){
    //     return(
    //         <div>
    //             <h1>{this.state.hello}</h1>
    //             <p>test</p>
    //         </div>
            
    //     )
    // }

    componentDidMount(){
        const peerConnection = new RTCPeerConnection();

        this.socket = io();
        this.video = document.querySelector('video');

        this.socket.on('offer', function (message){
            peerConnection.setRemoteDescription(message)
            .then(() => peerConnection.createAnswer())
            .then(sdp => peerConnection.setLocalDescription(sdp))
            .then(function() {
                this.socket.emit('answer', peerConnection.localDescription);
            });
        });

        peerConnection.onaddstream = function (event) {
            this.video.srcObject = event.stream;
        };
    }

    render(){
        return(
            <video playsInline autoPlay muted></video>
        )
    }
}