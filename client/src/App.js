import './App.css';
import React from 'react';
import Chat from './components/Chat';
import Join from './components/Join';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Join />} />
        <Route exact path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
