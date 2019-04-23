import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as thunkChat from '../thunks';
import * as actionsChat from '../actions';
import ChatView from '../components/Chat.jsx';
import * as navigation from '~/common/navigation.js';

class Chat extends Component {

    componentDidMount() {
        console.log('Chat didMount ---');
        if (this.props.chat === null) {
            this.props.goToHomePage();
        }
    }

    render() {
        return (
            <ChatView
                chat={this.props.chat}
                user={this.props.user}
                input={this.props.input}
                handleInput={this.props.handleInput}
                sendMessage={this.props.sendMessage}
            />
        );
    }
}

const mapStateToProps = state => ({
    chat: state.chat.chat,
    user: state.user.user,
    input: state.chat.input
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setChat: (chat) => actionsChat.setChat(chat),
        goToHomePage: navigation.goToHomePage,
        handleInput: (text) => actionsChat.handleInput(text),
        sendMessage: (text) => thunkChat.sendMessage(text),
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
