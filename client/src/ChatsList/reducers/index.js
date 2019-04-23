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

        case actionsChatsList.ADD_MESSAGE_TO_CHAT:
            const index = state.chats.findIndex(item => item.id === action.payload.chatId);
            const tempChat = state.chats[index];
            if (!Array.isArray(tempChat.messages)) {
                tempChat.messages = [];
            };
            tempChat.messages.push(action.payload.message);
            const updatedChats = state.chats.splice(index, 1, tempChat);
            return {
                ...state,
                chats: updatedChats
            };

        default:
            return state;
    }
};
