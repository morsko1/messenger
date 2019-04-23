const socketio = require('socket.io');

module.exports.listen = (server) => {
    const io = socketio.listen(server);
    const clients = {};
    io.on('connection', (socket) => {
        console.log('username = ', socket.handshake.query.username);
        const id = socket.handshake.query.username;
        clients[id] = socket;
        console.log('connected --- ', id);
        socket.on('disconnect', () => {
            delete clients[id];
            console.log('user disconnected --- ', id);
        });
        socket.on('message', (type, message) => {
            switch (type) {
                case 'SEND_MESSAGE':
                    console.log('type = ', type);
                    console.log('message = ', message);
                    const receiver = message.receivers[0];
                    const messageToSend = {
                        sender: message.sender,
                        receiver: receiver,
                        body: message.body,
                        date: message.date
                    }
                    if (receiver in clients) {
                        console.log('to send = ', messageToSend)
                        clients[receiver].send(messageToSend);
                    } else {
                        // need to save message to db
                    }
                    // socket.send('SEND_MESSAGE', action.payload.message);
                    break;

                default:
                    break;
            }
        });
    });

    return io;
}
