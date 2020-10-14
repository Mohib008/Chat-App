import { firestore } from 'firebase';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './Chatroom.css';


function Chatroom() {

    const messagesRef = firestore.Collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(30);
    const messages = useCollectionData(query, {idField: 'id'});

    return (
        <div className="charroom__app">
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} /> )}
        </div>
    )
}

export default Chatroom;
