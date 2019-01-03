import React from 'react';
import MediaQuery from 'react-responsive';
import ChatsList from '~/ChatsList';
import ChatPlaceholder from '~/ChatPlaceholder';
import './LayoutChatsList.scss';

const LayoutChatsListView = props => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <ChatsList />
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className="layout-chat-list-row">
                    <div className="chat-list-col">
                        <ChatsList />
                    </div>
                    <div className="chat-placeholder-col">
                        <ChatPlaceholder />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default LayoutChatsListView;
