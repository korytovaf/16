import React from 'react';
import './messages.css';


const Messages = (props) => {

    return (
        <div className='message'>
            <div className='message__text'>{props.messageText}</div>
            <div className='message__details'>
                <div className='message__author'>{props.messageAuthor}</div>
                <div className='message__time'>{props.messageTime}</div>
                <button onClick={props.removeMessage} className='message__remove'>&#10008;</button>
            </div>
        </div>
    );
}

export default Messages


