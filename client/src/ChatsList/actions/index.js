export const SET_CHATS = 'chatsList/SET_CHATS';
export const SET_USERS = 'chatsList/SET_USERS';
export const SET_VISIBLE_VIEW = 'chatsList/SET_VISIBLE_VIEW';
export const ADD_CHAT = 'chatsList/ADD_CHAT';
export const ADD_MESSAGE_TO_CHAT = 'chatsList/ADD_MESSAGE_TO_CHAT';

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: {
        chats
    }
});

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: {
        users
    }
});

export const setVisibleView = (view) => ({
    type: SET_VISIBLE_VIEW,
    payload: {
        view
    }
});

export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: {
        chat
    }
});

export const addMessageToChat = (chatId, message) => ({
    type: ADD_MESSAGE_TO_CHAT,
    payload: {
        chatId,
        message
    }
});
