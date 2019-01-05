import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as thunkChatsList from '../thunks';
import * as actionsChatsList from '../actions';
import ChatsListView from '../components/ChatsList.jsx';
import * as navigation from '~/common/navigation.js';

class ChatsList extends Component {
    render() {
        return (
            <ChatsListView
                startChat={this.props.startChat}
                goToChatPage={this.props.goToChatPage}
                chats={this.props.chats}
                user={this.props.user}
                users={this.props.users}
            />
        );
    }
}

const mapStateToProps = state => ({
    chats: state.chatsList.chats,
    user: state.user.user,
    users: state.chatsList.users
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        startChat: (participants) => thunkChatsList.startChat(participants),
        goToChatPage: navigation.goToChatPage
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);
