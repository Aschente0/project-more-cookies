import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';

const Broadcaster = () => {
// export default class Medium extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         hello:''
    //     }
    // }

    // componentDidMount(){
    //     this.socket=io()
    //     this.socket.emit('broadcaster');
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

    // componentDidmount(){
        const peerConnection = new RTCPeerConnection();

        const socket = io();

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(function(stream){
            peerConnection.addStream(stream);

            peerConnection.createOffer()
            .then(sdp => peerConnection.setLocalDescription(sdp))
            .then(function(){
                socket.emit('offer', peerConnection.localDescription);
            });
        });
    // }

    // render(){
        return(
            <div>
                <h1>{socket.id}</h1>
                <p> hello world </p>
                <video playsInline autoPlay muted></video>
            </div>
            
        )
    // }

}
export default Broadcaster;