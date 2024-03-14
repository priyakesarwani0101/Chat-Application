import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.css';
import Message from './MessageCard';
import { io } from 'socket.io-client';
import { user } from './Join'

let socket;

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState('');

    const sendMessage = () => {
        socket.emit('message', { message, id });
        setMessage('');
    };

    useEffect(() => {
        socket = io('http://localhost:3002/', { transports: ['websocket'] });
        socket.on('connect', () => {
            setId(socket.id);
        });

        socket.emit('joined', user);

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            alert(`${data.message}`);
        });

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            alert(`${data.message}`)
        });

        socket.on('userLeft', (data) => {
            setMessages([...messages, data]);
            alert(`${data.message}`);
        })

        return () => {
            socket.emit('disconnected');
            socket.off()
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
        });
        return () => {
            socket.off()
        };
    }, [messages]);

    return (
        <div className='ChatPage'>
            <div className='ChatContainer'>
                <div className='ChatHeader'>
                    <h3>Chat Room</h3>
                    <a href='/'><img src='https://cdn-icons-png.flaticon.com/512/9068/9068678.png' alt='close' /></a>
                </div>
                <ScrollToBottom className='ChatBox'>
                    {
                        messages.map((item, index) => (
                            <Message key={index} user={item.id === id ? '' : item.user} msg={item.message} align={item.id === id ? 'right' : 'left'} />
                        ))
                    }
                </ScrollToBottom>
                <div className='SendInput'>
                    <input type='text' style={{ width: '75%', padding: '1vmax', boxSizing: 'border-box', fontSize: '1.2vmax', borderRadius: '6px', border: '1px solid grey' }} value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null} />
                    <button onClick={sendMessage} className='sendBtn'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;