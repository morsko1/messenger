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
                            onClick={() => {
                                props.goToChatPage(chat.id);
                                props.openChat(chat);
                            }}
                        >
                            {chat.participants && chat.participants.join(', ')}
                        </div>
                    );
                }) :
                <div className="chats-list__empty">Нет бесед</div>
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
                                            props.openChat({id: 'someId', participants: [user.username, props.user.username]});
                                            // create conversation
                                            // props.startChat([props.user.username, user.username]);
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

const getNavigateButton = props => {
    return (
        props.visibleView === 'chats' ?
            <div
                className="chats-list__search-button"
                onClick={() => {props.setVisibleView('search');}}
            >
                Поиск
            </div> :
            <div
                className="chats-list__search-button-close"
                onClick={() => {props.setVisibleView('chats');}}
            >
                Назад
            </div>
    )
}

const ChatsListView = props => {
    return (
        <div className="chats-list">
            <div className="chats-list__header">
                ChatsListView
                {getNavigateButton(props)}
            </div>
            {props.visibleView === 'chats' ? getChatsList(props) : getSearch(props)}
        </div>
    );
}

export default ChatsListView;
