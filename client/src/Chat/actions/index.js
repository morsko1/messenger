export const SET_CHAT = 'chat/SET_CHAT';
export const HANDLE_INPUT = 'chat/HANDLE_INPUT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const setChat = (chat) => ({
    type: SET_CHAT,
    payload: {
        chat
    }
});

export const handleInput = (text) => ({
    type: HANDLE_INPUT,
    payload: {
        text
    }
});

export const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    payload: {
        message
    }
});
