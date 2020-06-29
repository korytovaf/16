import React from 'react';
import './App.css';
import Comment from "./components/comment/comment";
import AddComment from "./components/addComment/addComment";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: JSON.parse((localStorage.getItem('localComments'))) || [],
            newCommentText: '',
            newCommentAuthor: '',
        };


        this.Comment = () => {
            return (
                this.state.comments.map( (comment, i) =>
            <Comment
                state={this.state.comments}
                key={i}
                commentText={comment.commentText}
                commentTime={comment.commentTime}
                commentAuthor={comment.commentAuthor}
                removeComment={this.removeComment.bind(this, i)}
            />))
        };
    }

    addComment() {
        const time = new Date();

        const stateCopy = [...this.state.comments];
        stateCopy.push({
            commentText: this.state.newCommentText,
            commentTime: time.toLocaleString('ru-RU'),
            commentAuthor: this.state.newCommentAuthor,
        });
        localStorage.setItem('localComments', JSON.stringify(stateCopy));
        this.setState({newCommentText: '', newCommentAuthor: ''})
        this.setState(() => ({
            comments: stateCopy
        }))
    }


    removeComment(i) {
        const stateCopy = [...this.state.comments];
        stateCopy.splice(i, 1);
        localStorage.setItem('localComments', JSON.stringify(stateCopy));
        this.setState(() => ({
            comments: stateCopy
        }))
    }


    onNewCommentTextChange(e) {
        let textComment = e.target.value;
        this.setState({newCommentText: textComment})
    }

    onNewCommentAuthorChange(e) {
        let textAuthor = e.target.value;
        this.setState({newCommentAuthor: textAuthor})
    }


    render() {
        return (
            <div className='wrapper'>
                {this.Comment()}
                <AddComment
                    addComment={this.addComment.bind(this)}
                    onNewCommentTextChange={this.onNewCommentTextChange.bind(this)}
                    onNewCommentAuthorChange={this.onNewCommentAuthorChange.bind(this)}
                    state={this.state}
                />
            </div>
        );
    }
}

export default App;
