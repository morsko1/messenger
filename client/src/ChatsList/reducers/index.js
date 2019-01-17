import * as actionsChatsList from '../actions';

const initialState = {
    chats: [],
    users: [],
    visibleView: 'chats'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsChatsList.SET_CHATS:
            return {
                ...state,
                chats: action.payload.chats
            };

        case actionsChatsList.SET_USERS:
            return {
                ...state,
                users: action.payload.users
            };

        case actionsChatsList.SET_VISIBLE_VIEW:
            return {
                ...state,
                visibleView: action.payload.view
            };
        case actionsChatsList.ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload.chat]
            };

        default:
            return state;
    }
};
