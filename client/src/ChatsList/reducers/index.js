import * as actionsChatsList from '../actions';

const initialState = {
    chats: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsChatsList.SET_CHATS:
            return {
                ...state,
                chats: action.payload.chats
            };

        default:
            return state;
    }
};
