import React from "react";
import {connect} from "react-redux";
import './App.css';
import {commentTextChange, commentAuthorChange, addComment, removeComment} from "./actions/actions";
import {AddComment} from "./components/addComment/addComment";
import Comment from "./components/comment/comment";


const App = (props) => {
    const { comments, commentTextChange, commentAuthorChange, addComment, removeComment } = props;
         return (
            <div className='wrapper'>
                <Comment comments={comments} removeComment={removeComment} />
                <AddComment
                    commentTextChange={commentTextChange}
                    newTextChange={comments.newCommentText}
                    commentAuthorChange={commentAuthorChange}
                    newAuthorChange={comments.newCommentAuthor}
                    addComment={addComment}
                />
            </div>
        );
}

const mapStateToProps = state => {
    return {
        comments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentTextChange: (value) => dispatch(commentTextChange(value)),
        commentAuthorChange: (value) => dispatch(commentAuthorChange(value)),
        addComment: ( commentText, commentAuthor, commentTime ) => dispatch(addComment( commentText, commentAuthor, commentTime )),
        removeComment: (id) => dispatch(removeComment(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
