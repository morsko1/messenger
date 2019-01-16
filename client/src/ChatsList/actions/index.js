export const SET_CHATS = 'chatsList/SET_CHATS';
export const SET_USERS = 'chatsList/SET_USERS';
export const SET_VISIBLE_VIEW = 'chatsList/SET_VISIBLE_VIEW';

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
