import React from 'react';
import './ChatsList.scss';

const getChatsList = props => {
    return (
        <div className="chats-list-chats">
            {
                props.chats.length ? props.chats.map((chat) => {
                    return (
                        <div
                            className="chats-list-item"
                            key={chat.id}
                            onClick={() => {props.goToChatPage(chat.id)}}
                        >
                            {chat.participants.join(', ')}
                        </div>
                    );
                }) :
                null
            }
        </div>
    );
}

const ChatsListView = props => {
    return (
        <div className="chats-list">
            <div className="chats-list-header">ChatsListView</div>
            {getChatsList(props)}
        </div>
    );
}

export default ChatsListView;
