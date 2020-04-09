import template from '../static/template';

const Credits = () => {
    return (
        <div>
            <div className="main">
                <h1>
                    CREDITS
                </h1>
                <h2>
                    Icons
                </h2>
                <ul>
                    <li>Website icon/logo is from <a href="http://clipart-library.com/clipart/qTBX5L59c.html">Clipart Library</a></li>
                    <li>Viewer icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
                </ul>
                <h2>Coding</h2>
                <ul>
                    <li>Next.js framework <a href="https://nextjs.org/docs">docs</a> as well as starter template UI</li>
                    <li>WebRTC API <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection">docs</a></li>
                    <li>Socket.io <a href="https://socket.io/docs/">docs</a> for much of the websocket signalling</li>
                    <li>WebRTC and Socket.io example from <a href="https://github.com/Basscord/webrtc-video-broadcast">github</a></li>
                    <li>Auth0 and JWT login authentication with JWT template by <a href="https://blog.fullstacktraining.com/using-next-js-and-auth0/">Tamas Piros</a></li>
                    <li>Text-to-speech API <a href="https://usefulangle.com/post/98/javascript-text-to-speech">docs</a></li>
                    <li>Spoonacular API <a href="https://spoonacular.com/food-api/docs">docs</a></li>
                    <li>Real-time video manipulation tutorials from <a href="https://spoonacular.com/food-api/docs">deepstream.io</a></li>
                    <li><a href="https://devcenter.heroku.com/">Heroku</a> for deployment, with help from <a href="https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f">Shalandy Zhang</a></li>
                    <li>STUN/TURN servers by <a href="https://www.twilio.com/">Twilio</a></li>
                    <li>General/Debugging help from <a href="https://stackoverflow.com/">Stackoverflow</a> and <a href="https://www.w3schools.com/">w3schools</a></li>
                    <li>Learning about jsonwebtoken from <a href="https://auth0.com/learn/json-web-tokens/">auth0 docs</a> and <a href="https://redthunder.blog/2017/06/08/jwts-jwks-kids-x5ts-oh-my/">RedThunder.Blog</a> </li>
                    <li>Guide to retrieving JWKS from endpoints from <a href="https://www.npmjs.com/package/jwks-rsa">npmjs</a></li>
                    <li>Procfile by <a href="https://github.com/chrling">Chris Ling</a></li>
                </ul>
            </div>
            <style jsx>{`
                    .main {
                        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
                        'Arial', sans-serif;
                        padding: 20px 20px 60px;
                        color: #067df7;
                    }
            `}
            </style>
        </div>
    )
}
export default template(Credits);