import React from 'react';
import './Chat.scss';

const getChatTitle = props => {
    return (
        <div className="chat__title">
            {
                props.chat && props.chat.participants && props.chat.participants.length ?
                    props.chat.participants.join(', ') :
                    'title'
            }
        </div>
    );
}
const getMessagesArea = props => {
    return (
        <div className="chat__messages-area">
            chat area
        </div>
    );
}
const getInputView = props => {
    return (
        <div className="chat__form-container">
            <form
                className="chat__form"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.sendMessage();
                }}
            >
                <input
                    type="text"
                    placeholder="Текст сообщения ..."
                    className="chat__form-input"
                    value={props.input.text}
                    onChange={(e) => {props.handleInput(e.target.value)}}
                />
                <button
                    type="submit"
                    className="chat__form-submit-button"
                >
                    =>
                </button>
            </form>
        </div>
    );
}

const ChatView = props => {
    return (
        <div className="chat">
            {getChatTitle(props)}
            {getMessagesArea(props)}
            {getInputView(props)}
        </div>
    );
}

export default ChatView;
