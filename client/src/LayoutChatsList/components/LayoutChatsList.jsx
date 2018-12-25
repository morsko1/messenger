import React from 'react';
import MediaQuery from 'react-responsive';
import ChatsList from '~/ChatsList';
import ChatPlaceholder from '~/ChatPlaceholder';

const LayoutChatsListView = props => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <ChatsList />
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className="row">
                    <div className="col-4">
                        <ChatsList />
                    </div>
                    <div className="col-8">
                        <ChatPlaceholder />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default LayoutChatsListView;
