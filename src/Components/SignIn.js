import { auth } from 'firebase';
import React from 'react';
import './SingIn.css';
import firebase from 'firebase';

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div className="signin__app">
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
    )
}

function SignOut() {
    return auth.currentUser && (
       <Button onClick={() => auth.signOut()}>SignOut</Button>
    )
}

export default SignIn;
