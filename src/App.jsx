import React, { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// page import
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import './App.css'
import Chat from "./Chat";
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
          <Route path="/" element={<About/>}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

// function SignIn() {
//   const SignInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <button onClick={SignInWithGoogle}>Sign in with Google</button>
//   )
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL } = auth.currentUser;
//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })
//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }
//   return (<>
//     <main>
//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//       <span ref={dummy}></span>
//     </main>
//     <form onSubmit={sendMessage}>
//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
//       <button type="submit" disabled={!formValue}>🕊</button>
//     </form>
//   </>)
// }


// function SignOut() {
//   return auth.currentUser && (
//     <button onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }