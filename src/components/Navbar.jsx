import React from 'react'
import '../components/Components.css'
import Button from './Button';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import About from '../pages/About'
import Chat from '../Chat'

const Navbar = () => {
  const navigate = useNavigate();
  const navigateChat = () => {
    navigate('/chat');
  };
  const navigateAbout = () => {
    navigate('/about');
  }
  
  return (
    <div className='navbar'>
      <button onClick={navigateChat} className='redirect' style={{backgroundColor:"var(--secondary)", borderRadius:"9px"}}> Sign Up </button>
      <a onClick={navigateAbout} className='redirect' style={{color:"white", textDecoration:"none", cursor:"pointer" }}>About Us</a>
         <Routes>
            <Route exact path="/about" element={<About/>}/>
          <Route path="/chat" element={<Chat/>}/>
         </Routes>
    </div>
  )
}

export default Navbar