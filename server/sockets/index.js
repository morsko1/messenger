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
         socket.on('message', (message) => {
            console.log('message =', message);
            socket.send({data: 'message from server: ' + message.message});
        });
    });

    return io;
}
