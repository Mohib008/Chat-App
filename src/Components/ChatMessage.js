import React from 'react';
import "./ChatMessge.css";




function ChatMessage(props) {
    const { text, uid } = props.message;
    return <p>{text}</p>
}

export default ChatMessage
