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
                goToChatPage={this.props.goToChatPage}
                chats={this.props.chats}
            />
        );
    }
}

const mapStateToProps = state => ({
    chats: state.chatsList.chats
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        goToChatPage: navigation.goToChatPage
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);
