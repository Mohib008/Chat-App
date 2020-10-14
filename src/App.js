import React from 'react';
import './App.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="app">
     <header className="app__header">
       <h1>Hello world!</h1>
     </header>
    </div>
  );
}

export default App;
