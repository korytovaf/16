import React from 'react';
import './App.css';
import Messages from "./components/messages/messages";
import NewMessage from "./components/add-message/add-message";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: JSON.parse((localStorage.getItem('localMessages'))) || [],
            newMessageText: '',
            newMessageAuthor: '',
        };


        this.Message = () => {
            return (
                this.state.messages.map( (message, i) =>
            <Messages
                state={this.state.messages}
                key={i}
                messageText={message.messageText}
                messageTime={message.messageTime}
                messageAuthor={message.messageAuthor}
                removeMessage={this.removeMessage.bind(this, i)}
            />))
        };
    }

    addMessage() {
        const time = new Date();

        const stateCopy = [...this.state.messages];
        stateCopy.push({
            messageText: this.state.newMessageText,
            messageTime: time.toLocaleString('ru-RU'),
            messageAuthor: this.state.newMessageAuthor,
        });
        localStorage.setItem('localMessages', JSON.stringify(stateCopy));
        this.setState({newMessageText: '', newMessageAuthor: ''})
        this.setState(() => ({
            messages: stateCopy
        }))
    }


    removeMessage(i) {
        const stateCopy = [...this.state.messages];
        stateCopy.splice(i, 1);
        localStorage.setItem('localMessages', JSON.stringify(stateCopy));
        this.setState(() => ({
            messages: stateCopy
        }))
    }


    onNewMessageTextChange(e) {
        let textMessages = e.target.value;
        this.setState({newMessageText: textMessages})
    }

    onNewMessageAuthorChange(e) {
        let textAuthor = e.target.value;
        this.setState({newMessageAuthor: textAuthor})
    }


    render() {
        return (
            <div className='wrapper'>
                {this.Message()}
                <NewMessage
                    addMessage={this.addMessage.bind(this)}
                    onNewMessageTextChange={this.onNewMessageTextChange.bind(this)}
                    onNewMessageAuthorChange={this.onNewMessageAuthorChange.bind(this)}
                    state={this.state}
                />
            </div>
        );
    }
}

export default App;
