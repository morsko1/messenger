import io from 'socket.io-client';
import * as thunkChatsList from '~/ChatsList/thunks/';
import * as thunkChat from '~/Chat/thunks/';

const socketMiddleware = () => {
    let socket;
    return storeAPI => {

        return next => action => {
            switch (action.type) {
                case 'CONNECT_WEBSOCKET':
                    const param = '123'
                    console.log('connecting socket --- action ', action);
                    socket = io('http://localhost:3000', {query:`username=${action.payload.username}`});

                    socket.on('message', (message) => {
                        console.log('message =', message);
                        storeAPI.dispatch({
                            type : 'SOCKET_MESSAGE_RECEIVED',
                            payload : message
                        });

                        // handle incoming message
                        storeAPI.dispatch(thunkChatsList.handleIncomingMessage(message));
                        storeAPI.dispatch(thunkChat.handleIncomingMessage(message));
                    });
                    break;
                case 'SEND_WEBSOCKET_MESSAGE':
                    console.log('action =', action);
                    storeAPI.dispatch({
                        type : 'SOCKET_MESSAGE_SENT',
                        payload : action.payload
                    });
                    socket.send(action.payload);
                    break;
                default:
                    break;

                case 'SEND_MESSAGE':
                    socket.send('SEND_MESSAGE', action.payload.message);
                    break;
            }

            return next(action);
        }
    }
}

export default socketMiddleware;
