# Real Time Chat Application Using Socket.io


This is a real time chat application where multiple users can come and chat with each others.The application supports multiple client connections to the server simultaneously, allowing users to send and receive messages in a shared chatroom
environment.


## Technologies Used:
#### `React.js`
#### `Node.js`
#### `Express.js`
#### `Socket.io`

## General Guidelines (how to run):

### Frontend Setup:

1. Clone this repository to your local machine.
2. Navigate to the `client` directory.
3. Install dependencies using `npm install`.
4. Start the frontend server using `npm start`.

### Backend Setup:

1. Navigate to the `server` directory.
2. Install dependencies using `npm install`.
3. Start the backend server using `npm start`.

### Architecture and Concurrency:

The application follows a client-server architecture, where the server is responsible for handling WebSocket connections and broadcasting messages to connected clients. Concurrency is handled using Node.js's event-driven, non-blocking I/O model. The server can handle multiple client connections concurrently without blocking other operations.

### Deployment Information:

- The frontend of this application is deployed on [Vercel](https://vercel.com/), and the backend is deployed on [Render](https://render.com/).
-  <span style="color:red;">**Please note:** It may take a little time for the server to start, especially since the free version of Render is being used for backend deployment.</span>


### Deployed Links:

- [Frontend](https://chat-application-pi-dusky.vercel.app/) - Click here to test and use the Chat application (<span style="color:red;">***<===Please note:===>*** It may take a little time in first time for the server to start, especially since the free version of Render is being used for backend deployment.</span>)
- [Backend](https://chat-application-q3wm.onrender.com) - This is server link deployed on versel.

## Usage:

1. Once both the frontend and backend servers are running, open the application in your web browser.
2. Enter your name and join the chat room.
3. Start chatting with other users who are in chat-room in real-time!

### Additional Information:

- The frontend application is created using Create React App (CRA).
- WebSocket communication is facilitated using Socket.io.
- The backend server is built with Node.js and Express.js.

Feel free to contribute to this project by submitting pull requests or opening issues for any bugs or feature requests.

