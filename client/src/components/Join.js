import React, { useState } from 'react';
import Header from './Header';
import './Join.css'
import { Link } from 'react-router-dom';

let user;

const Join = () => {
    const [name, setName] = useState('');

    const handleJoin = () => {
        user = name;
        setName('');
    };

    const handleCheck = (e) => {
        if (!name || name.length === 0) {
            e.preventDefault();
            alert('Please enter your name to join the chat room');
        }
    };

    return (
        <div className='JoinPage'>
            <div className='JoinContainer'>
                <Header />
                <input className='JoinInput' type='text' value={name} placeholder='Enter your name here...' onChange={(e) => setName(e.target.value)} />
                <Link onClick={handleCheck} to='/chat'><button className='JoinBtn' onClick={handleJoin}>Join Chat Room</button></Link>
            </div>
        </div>
    )
}

export default Join;
export { user }