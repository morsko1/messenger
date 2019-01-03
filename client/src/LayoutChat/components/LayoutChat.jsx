import React from 'react';
import MediaQuery from 'react-responsive';
import ChatsList from '~/ChatsList';
import Chat from '~/Chat';
import './LayoutChat.scss';

const LayoutChatsListView = props => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <Chat />
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className="layout-chat-row">
                    <div className="chats-list-col">
                        <ChatsList />
                    </div>
                    <div className="chat-col">
                        <Chat />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default LayoutChatsListView;
