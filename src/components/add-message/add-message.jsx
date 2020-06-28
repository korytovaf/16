import React from "react";
import './add-message.css'

const NewMessage = (props) => {


    return (
        <div className='newMessage'>
            <textarea
                className='newMessage__text'
                value={props.state.newMessageText}
                onChange={props.onNewMessageTextChange}
            />

            <input
                className='newMessage__author'
                type="text"
                value={props.state.newMessageAuthor}
                onChange={props.onNewMessageAuthorChange}
            />
            <button onClick={props.addMessage} className='newMessage__button'>&#10148;</button>
        </div>
    );
}

export default NewMessage