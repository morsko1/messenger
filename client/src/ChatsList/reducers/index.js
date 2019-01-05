import * as actionsChatsList from '../actions';

const initialState = {
    chats: [],
    users: []
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

        default:
            return state;
    }
};
