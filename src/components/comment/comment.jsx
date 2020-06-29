import React from 'react';
import './comment.css';


const Comment = (props) => {

    return (
        <div className='comment'>
            <div className='comment__text'>{props.commentText}</div>
            <div className='comment__details'>
                <div className='comment__author'>{props.commentAuthor}</div>
                <div className='comment__time'>{props.commentTime}</div>
                <button onClick={props.removeComment} className='comment__remove'>&#10008;</button>
            </div>
        </div>
    );
}

export default Comment


