import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io'

const app = express();
const port = 3002 || process.env.PORT;

app.use(cors())

const users = [];

const server = createServer(app)
const io = new Server(server);
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// ===here webSocket is being connected===
io.on('connection', (socket) => {
    socket.on('joined', (user) => {
        users[socket.id] = user;
        socket.broadcast.emit('userJoined', { user: "Admin", message: `${users[socket.id]} has joined the chat-room!` });
        socket.emit('welcome', { user: 'Admin', message: `Welcome to chat room ${users[socket.id]}` });
    });
    socket.on('message', ({ message, id }) => {
        io.emit('sendMessage', { user: users[id], message, id })
    })
    socket.on('disconnected', () => {
        socket.broadcast.emit('userLeft', { user: "Admin", message: `${users[socket.id]} has left the room` });
    })
})
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})