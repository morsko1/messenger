import * as actionsChat from '../actions';

const initialState = {
    chat: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsChat.SET_CHAT:
            return {
                ...state,
                chat: action.payload.chat
            };

        default:
            return state;
    }
};
