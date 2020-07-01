import React, {Component} from 'react';
import './App.css';
import Comment from "./components/comment/comment";
import {connect} from "react-redux";
import {AddComment} from "./components/addComment/addComment";
import {onNewCommentAuthorChange, onNewCommentTextChange} from "./actions/addCommentAction";


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: JSON.parse((localStorage.getItem('localComments'))) || [],
    //         newCommentText: '',
    //         newCommentAuthor: '',
    //     };
    //
    //
    //     this.Comment = () => {
    //         return (
    //             this.state.comments.map( (comment, i) =>
    //         <Comment
    //             state={this.state.comments}
    //             key={i}
    //             commentText={comment.commentText}
    //             commentTime={comment.commentTime}
    //             commentAuthor={comment.commentAuthor}
    //
    //         />))
    //     };
    // }
    //
    // addComment() {
    //     const time = new Date();
    //
    //     const stateCopy = [...this.state.comments];
    //     stateCopy.push({
    //         commentText: this.state.newCommentText,
    //         commentTime: time.toLocaleString('ru-RU'),
    //         commentAuthor: this.state.newCommentAuthor,
    //     });
    //     localStorage.setItem('localComments', JSON.stringify(stateCopy));
    //     this.setState({newCommentText: '', newCommentAuthor: ''})
    //     this.setState(() => ({
    //         comments: stateCopy
    //     }))
    // }
    //
    //
    // removeComment(i) {
    //     const stateCopy = [...this.state.comments];
    //     stateCopy.splice(i, 1);
    //     localStorage.setItem('localComments', JSON.stringify(stateCopy));
    //     this.setState(() => ({
    //         comments: stateCopy
    //     }))
    // }
    //
    // //
    // onNewCommentTextChange(e) {
    //     let textComment = e.target.value;
    //     this.setState({newCommentText: textComment})
    // }
    //
    // onNewCommentAuthorChange(e) {
    //     let textAuthor = e.target.value;
    //     this.setState({newCommentAuthor: textAuthor})
    // }




    render() {

        const {newCommentText, newCommentAuthor} = this.props
        return (
            <div className='wrapper'>
                <Comment />
                <AddComment
                    newCommentText={newCommentText}
                    newCommentAuthor={newCommentAuthor}
                    updataNewCommentTextChange={onNewCommentTextChange}
                    updataNewCommentAuthorChange={onNewCommentAuthorChange}
                    state={this.state}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        newCommentText: store.addComment.newCommentText,
        newCommentAuthor: store.addComment.newCommentAuthor,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewCommentTextChange: (newCommentText) => dispatch(onNewCommentTextChange(newCommentText)),
        updateNewCommentAuthorChange: (newCommentAuthor) => dispatch(onNewCommentAuthorChange(newCommentAuthor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
