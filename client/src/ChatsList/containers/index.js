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
                visibleView={this.props.visibleView}
                setVisibleView={this.props.setVisibleView}
                openChat={this.props.openChat}
            />
        );
    }
}

const mapStateToProps = state => ({
    chats: state.chatsList.chats,
    user: state.user.user,
    users: state.chatsList.users,
    visibleView: state.chatsList.visibleView
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        startChat: (participants) => thunkChatsList.startChat(participants),
        setVisibleView: (view) => actionsChatsList.setVisibleView(view),
        openChat: (chat) => thunkChatsList.openChat(chat),
        goToChatPage: navigation.goToChatPage
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);
