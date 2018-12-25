import React from 'react';
import MediaQuery from 'react-responsive';
import ChatsList from '~/ChatsList';
import Chat from '~/Chat';

const LayoutChatsListView = props => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <Chat />
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className="row">
                    <div className="col-4">
                        <ChatsList />
                    </div>
                    <div className="col-8">
                        <Chat />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default LayoutChatsListView;
