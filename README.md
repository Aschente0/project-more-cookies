# Title: Cookies

## Members:
Yuk-Ming (Carlos) Lam

## URLs
App: ```https://aqueous-coast-40978.herokuapp.com/```
Youtube Demo: ```https://www.youtube.com/watch?v=JeW5ip-DwZE```

## Description:
A social media app/platform that offers two main functionalities.
The first is a broadcasting functionality; a user would begin by searching for recipes, selecting one that will be the topic of the stream. The stream will begin immediately upon choosing the recipe, and the streamer will be taken to a new page composed of the stream, as well as the instructions of the recipe on the side.
The second is a watching functionality; a user who intends to watch a stream will begin by selecting a stream from a list of streams available. Choosing one allows the user to watch the stream, as well as communicate to the streamer and other viewers through a message component. The message component is not displayed in a chat, but rather shows up on the video stream as a text message displayed on the top-left corner of the stream. The message is also synthesized into speech, allowing both the streamers and the viewers to hear the message. 

## Technologies Used:
Node.js back-end

Next.js React framework for front-end

Auth0 with JWT for authentication (boiler-plate code credited in Credits page)

Spoonacular API for recipes

WebRTC for p2p live streaming

Socket.io for signaling

Twilio's services for STUN/TURN servers to guarantee peer connections

Heroku for deployment

## Documentation:
## Authentication (Auth0 and JWT):
The endpoint to fetch the public key can be used like:
- example: ```curl --verbose --request GET https://raspy-silence-2106.auth0.com/.well-known/jwks.json```
- response body:
```javascript
    {
        "keys": [
            {
                "alg": "RS256",
                "kty": "RSA",
                "use": "sig",
                "n": "q8LhgmlgK_VptnKCW3jaNKl96FA4sIZAfqIpa6hv4gSKmAs_xFj4BKNS4ye0Tsl1Z_8mrcxCKDkfZPSx0Qgq5dfp20gBys33Jw1hh5YpNBDjcdbHvrcif-klWi5cWmeH3s9MJMc3gP9eLeg54BTR8jFvm0pTknSmDl4izW4jsJLgtE8GEXZ4wIlJ1bsk1EmIzwCz-8aSjUCohTRWJEBCZGr7LYqUGEc01j0EBhToUgFOCxiPneBWsEXbCN8ADkuWNy_s16dbN8-qjd3b9DBtAIhIO4TS8XLilic2GUpbdWVHwzKMowe7ooAw_WfcTpJt9NEP7x38eyY8NL3NEX2BXQ",
                "e": "AQAB",
                "kid": "OEVFRUZGQzY0MEVFRDBBMTdFREVDQTE5QzZGMTM1QTk4NTZFODVGQw",
                "x5t": "OEVFRUZGQzY0MEVFRDBBMTdFREVDQTE5QzZGMTM1QTk4NTZFODVGQw",
                "x5c": [
                    "MIIDBzCCAe+gAwIBAgIJD0vtZRKOQ4n4MA0GCSqGSIb3DQEBCwUAMCExHzAdBgNVBAMTFmRldi01NzJ0NjV3Yi5hdXRoMC5jb20wHhcNMjAwMzE4MDIxODI0WhcNMzMxMTI1MDIxODI0WjAhMR8wHQYDVQQDExZkZXYtNTcydDY1d2IuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq8LhgmlgK/VptnKCW3jaNKl96FA4sIZAfqIpa6hv4gSKmAs/xFj4BKNS4ye0Tsl1Z/8mrcxCKDkfZPSx0Qgq5dfp20gBys33Jw1hh5YpNBDjcdbHvrcif+klWi5cWmeH3s9MJMc3gP9eLeg54BTR8jFvm0pTknSmDl4izW4jsJLgtE8GEXZ4wIlJ1bsk1EmIzwCz+8aSjUCohTRWJEBCZGr7LYqUGEc01j0EBhToUgFOCxiPneBWsEXbCN8ADkuWNy/s16dbN8+qjd3b9DBtAIhIO4TS8XLilic2GUpbdWVHwzKMowe7ooAw/WfcTpJt9NEP7x38eyY8NL3NEX2BXQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRG2zKm/nafWGdkEM2qS/jGkTgO9TAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAIYMgTyzCXZFXfEDvQnoWy4axYe+ESa3qiGCEbjc63Syd8wRVsDCtkFRC72qVK35bd4ihpTgbN7XHEYi8Tfh4zLF3ndNAba348gcOz0rjk6hrow8+8ZGh+GGrFuUBE/zSz8+Covhp7tANJYTG0AnrCerwStVVoN1wecbvuvmYAA93ZaPuu/s3Hso1WfXkcfQiTIun7kXK8bqoYWjHKXIEu49WtfQDl5q/c/X3z6R6eaOqMunRk02wwqISRIsBOnDJxkqRecd7qKjLJ+u0spoWztgevlHm/VS1hG+XMBnpW3RBp+GJttAQZ+ut9bXxXhA5Yk2/l8xJsKhmYecHOmoWnU="
                ]
            }
        ]
    }
```
The authentication happens when the user is redirected to Auth0 and redirected back to the main page of the app after logging in. The user returns with a JWT that is then stored in the cookies of the browser. A wrapper template is wrapped around all pages, which verifies that the JWT is valid (essentially becoming authorization). This is done by the boiler-plate code and templates mentioned in the credits page, as well as the auth0 and jsonwebtoken packages used. The JWT is further used to secure the Socket.io connections by applying middleware to the connections, verifying that the JWT is valid once again. The verification mentioned is done by retrieving a public key through the Auth0 endpoint for the domain of the app, and used to check against the certificate.

## Socket.io:
See diagram.png for a general overview of how the connection is established (excluding stream_pop and message_synth).

### URL: `https://aqueous-coast-40978.herokuapp.com/broadcaster` (under namespace '/stream')
**socket.on('watcher', ...)**
- parameters:
    - id (string): the id of the socket of the watcher
    - config (object): configuration containing key 'iceServers' with an array of strings as the value
- emits:
    - 'recipe_data'
    - 'candidate'

**socket.on('answer', ...)**
- parameters:
    - id (string): the id of the socket of the watcher
    - description (RTCSessionDescription): value specifying the watcher peer's answer

**socket.on('candidate', ...)**
- parameters:
    - id (string): the id of the socket of the watcher
    - candidate (RTCIceCandidateInit): information about the candidate

**socket.on('stream_popup', ...)**
- parameters:
    - message (string): the string message to be displayed on the video stream

**socket.on('dc', ...)**
- parameters:
    - id (string): the id of the socket that disconnected

### URL: `https://aqueous-coast-40978.herokuapp.com/watcher` (under namespace '/stream')
**socket.on('broadcaster')**
- parameters: none
- emits:
    - 'watcher'

**socket.on('stream_choice', ...)**
- parameters:
    - broadcasters (object): key/value pairs with the socket id of a broadcaster as the key, and an array of size 2 with the first index as a recipe (json) object and second index the name (string) of the broadcaster
- emits:
    - 'stream_chosen'

**socket.on('candidate', ...)**
- parameters:
    - id (string): the id of the socket of the broadcaster
    - candidate (RTCIceCandidateInit): information about the candidate

**socket.on('recipe_data', ...)**
- parameters:
    - data (object): information about the recipe for the stream

**socket.on('stream_data', ...)**
- parameters:
    - viewCount (string): the number of viewers watching the stream

**socket.on('message_synth', ...)**
- parameters:
    - id (string): the id of the socket of the broadcaster
    - message (string): the message to be synthesized (text-to-speech)

**socket.on('dc', ...)**
- parameters:
    - broadcast (string): the id of the socket of broadcaster disconnecting

### SERVER (under namespace '/stream'):
**socket.on('broadcaster', ...)**
- parameters:
    - recipe (object): information about the recipe in the stream
    - name (string): name of the broadcaster
- emits:
    - 'broadcaster'

**socket.on('watcher', ...)**
- parameters: none
- emits:
    - 'stream_choice'

**socket.on('stream_chosen', ...)**
- parameters:
    - broadcaster (string): id of the socket of the broadcaster
- emits:
    - 'watcher'

**socket.on('offer', ...)**
- parameters:
    - id (string): the id of the socket of the peer
- emits:
    - 'offer'

**socket.on('answer', ...)**
- parameters:
    - id (string): the id of the socket of the peer
    - message (RTCSessionDescription): the local description of the RTCPeerConnection
- emits:
    - 'answer'

**socket.on('candidate', ...)**
- parameters:
    - id (string): id of the socket of the peer
    - message (RTCIceCandidate): the candidate of the RTCPeerConnectionIceEvent
- emits:
    - 'candidate'

**socket.on('stream_popup', ...)**
- parameters:
    - id (string): id of the socket of the peer
    - message (string): the string message for the popup
- emits:
    - 'stream_popup'

**socket.on('recipe_data', ...)**
- parameters:
    - id (string): id of the socket of the peer
    - data (object): the information of the recipe for the stream
- emits:
    - 'recipe_data'

**socket.on('message_synth', ...)**
- parameters:
    - message (string): the message to be synthesized
- emits:
    - 'message_synth'

**socket.on('stream_data', ...)**
- parameters:
    - watchers (string[]): an array of ids for each socket of watchers viewing the stream
    - viewcount (string): number of viewers watching the stream
- emits:
    - 'stream_data'

**socket.on('disconnect', ...)**
- parameters: none
- emits:
    - 'dc'

See diagram.png for a general overview of how the connection is established (excluding stream_pop and message_synth).

## To test locally:
Swap out the commented lines of code from the following:
1. Change the clientID and domain under ./settings.js
2. Change the redirectUri under ./static/auth0.js
3. Change the jwksUri endpoint under ./server.js

The allowed domain is ```http://localhost:3000```

To test out the app without hitting the Spoonacular API, swap in the 2 commented fetch() functions (line 30, line 61) under ./pages/recipeWiki.js
