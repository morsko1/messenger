import io from 'socket.io-client';

const socketMiddleware = () => {
    return storeAPI => {

        return next => action => {
            switch (action.type) {
                case 'CONNECT_WEBSOCKET':
                    const param = '123'
                    console.log('connecting socket --- action ', action);
                    const socket = io('http://localhost:3000', {query:`username=${action.payload.username}`});

                    socket.on('message', (message) => {
                        console.log('message =', message);
                        storeAPI.dispatch({
                            type : 'SOCKET_MESSAGE_RECEIVED',
                            payload : message
                        });
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
            }

            return next(action);
        }
    }
}

export default socketMiddleware;
