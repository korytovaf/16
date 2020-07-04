import React from "react";
import './addComment.css'

export const AddComment = ({newTextChange, newAuthorChange, commentTextChange, commentAuthorChange}) => {
        return (
            <div className='addComment'>
                <textarea
                    className='addComment__text'
                    value={newTextChange}
                    onChange={commentTextChange}
                />

                <input
                    className='addComment__author'
                    type="text"
                    value={newAuthorChange}
                    onChange={commentAuthorChange}

                />
                <button  className='addComment__button'>&#10148;</button>
            </div>
        );
}