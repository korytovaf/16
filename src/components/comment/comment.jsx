import React from 'react';
import './comment.css';


const Comment = (props) => {

    const { comments, removeComment } = props;

    return (
        <ol>
            {
                comments.comments.map((comment, index) => {
                    return (
                        <li key={index} className='comment'>
                            <div className='comment__text'>{comment.commentText}</div>
                            <div className='comment__details'>
                                <div className='comment__author'>{comment.commentAuthor}</div>
                                <div className='comment__time'>{comment.commentTime}</div>
                                <button onClick={removeComment} className='comment__remove'>&#10008;</button>
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );
}

export default Comment


