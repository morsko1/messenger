import io from 'socket.io-client';

const socketMiddleware = () => {
    return storeAPI => {
        const socket = io('http://localhost:3000');

        socket.on('message', (message) => {
            console.log('message =', message);
            storeAPI.dispatch({
                type : 'SOCKET_MESSAGE_RECEIVED',
                payload : message
            });
        });

        return next => action => {
            if(action.type == 'SEND_WEBSOCKET_MESSAGE') {
                console.log('action =', action);
                storeAPI.dispatch({
                    type : 'SOCKET_MESSAGE_SENT',
                    payload : action.payload
                });
                socket.send(action.payload);
                return;
            }

            return next(action);
        }
    }
}

export default socketMiddleware;
