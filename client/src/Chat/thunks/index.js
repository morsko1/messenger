import * as actionsChat from '../actions';

export const sendMessage = () => (dispatch, getState) => {
    const state = getState();
    const text = state.chat.input.text.trim();
    if (!text) {
        return;
    }
    const username = state.user.user.username;
    const receivers = state.chat.chat.participants.filter(item => {
        return item !== username;
    });
    const message = {
        date: new Date(),
        sender: username,
        receivers: receivers,
        body: {
            text: text
        }
    };
    dispatch(actionsChat.sendMessage(message));
    dispatch(actionsChat.handleInput(''));
};

export const handleIncomingMessage = (message) => (dispatch, getState) => {
    console.log('handleIncomingMessage ---', message);
};
