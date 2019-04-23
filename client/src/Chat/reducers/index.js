import * as actionsChat from '../actions';

const initialState = {
    chat: null,
    input: {
        text: ''
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsChat.SET_CHAT:
            return {
                ...state,
                chat: action.payload.chat
            };

        case actionsChat.HANDLE_INPUT:
            const newInput = {
                ...state.input,
                text: action.payload.text
            };
            return {
                ...state,
                input: newInput
            };

        default:
            return state;
    }
};
