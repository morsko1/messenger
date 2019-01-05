import React from 'react';
import './ChatsList.scss';

const getChatsList = props => {
    return (
        <div className="chats-list__chats">
            {
                props.chats.length ? props.chats.map((chat) => {
                    return (
                        <div
                            className="chats-list__item"
                            key={chat.id}
                            onClick={() => {props.goToChatPage(chat.id)}}
                        >
                            {chat.participants && chat.participants.join(', ')}
                        </div>
                    );
                }) :
                null
            }
        </div>
    );
}

const getSearch = props => {
    return (
        <div className="chats-list__search">
            <div className="chats-list__results">
                Все пользователи:
                {
                    props.users.length ?
                        props.users.map(user => {
                            if (props.user.username !== user.username) {
                                return (
                                    <div
                                        key={user.username}
                                        onClick={() => {
                                            props.goToChatPage(user.username);
                                            props.startChat([props.user.username, user.username]);
                                            // create conversation
                                        }}
                                    >
                                        {user.username}
                                    </div>
                                );
                            }
                        }) :
                        null
                }
                <hr/>
            </div>
        </div>
    );
}

const ChatsListView = props => {
    return (
        <div className="chats-list">
            <div className="chats-list__header">ChatsListView</div>
            {getSearch(props)}
            {getChatsList(props)}
        </div>
    );
}

export default ChatsListView;
