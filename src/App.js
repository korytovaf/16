import React from "react";
import {connect} from "react-redux";
import './App.css';
import {commentTextChange, commentAuthorChange} from "./actions/addCommentAction";
import {AddComment} from "./components/addComment/addComment";
import Comment from "./components/comment/comment";


const App = (props) => {
    const { AddCommentReducer, commentTextChange, commentAuthorChange } = props;
         return (
            <div className='wrapper'>
                <Comment />
                <AddComment
                    commentTextChange={commentTextChange}
                    newTextChange={AddCommentReducer.newCommentText}
                    commentAuthorChange={commentAuthorChange}
                    newAuthorChange={AddCommentReducer.newCommentAuthor}
                />
            </div>
        );
}

const mapStateToProps = state => {
    return {
        AddCommentReducer: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentTextChange: (value) => dispatch(commentTextChange(value)),
        commentAuthorChange: (value) => dispatch(commentAuthorChange(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
