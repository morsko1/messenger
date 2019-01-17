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
    }
    render() {
        return (
            <ChatView
                chat={this.props.chat}
                user={this.props.user}
            />
        );
    }
}

const mapStateToProps = state => ({
    chat: state.chat.chat,
    user: state.user.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setChat: (chat) => actionsChat.setChat(chat)
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
