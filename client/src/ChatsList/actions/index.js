export const SET_CHATS = 'chatsList/SET_CHATS';

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: {
        chats
    }
});
