export const SET_CHATS = 'chatsList/SET_CHATS';
export const SET_USERS = 'chatsList/SET_USERS';

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
