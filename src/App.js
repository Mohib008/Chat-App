import React from 'react';
import './App.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Chatroom from "./Components/Chatroom";
import SignIn from "./Components/SignIn";

firebase.initializeApp({
  apiKey: "AIzaSyAe4PVswlgvDU68sPaPZxzLNuG0IB_Aov0",
  authDomain: "chat-app-11227.firebaseapp.com",
  databaseURL: "https://chat-app-11227.firebaseio.com",
  projectId: "chat-app-11227",
  storageBucket: "chat-app-11227.appspot.com",
  messagingSenderId: "903738552260",
  appId: "1:903738552260:web:8067977383332fe2e67e91"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
     <header className="app__header">
  
     </header>
     <section className="app__main">
        {user ? <Chatroom /> : <SignIn />}
     </section>
    </div>
  );
}

export default App;
