import React, { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// page import
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import './App.css'
import Chat from "./Chat";
// import Location from './Location';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBZXkILpnhg4iPaAVHWaLphVTYa4tasEMQ",
  authDomain: "chat-c44eb.firebaseapp.com",
  projectId: "chat-c44eb",
  storageBucket: "chat-c44eb.appspot.com",
  messagingSenderId: "1080089699124",
  appId: "1:1080089699124:web:3b441b9760e63182563b61"
})


const auth = firebase.auth();
const firestore = firebase.firestore();


export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}