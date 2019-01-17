export const SET_CHAT = 'chat/SET_CHAT';

export const setChat = (chat) => ({
    type: SET_CHAT,
    payload: {
        chat
    }
});
