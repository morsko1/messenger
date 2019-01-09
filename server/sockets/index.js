const socketio = require('socket.io');

module.exports.listen = (server) => {
    const io = socketio.listen(server);
    io.on('connection', (socket) => {
        console.log('connected ---');
        socket.on('disconnect', () => {
            console.log('user disconnected ---');
        });
         socket.on('message', (message) => {
            console.log('message =', message);
            socket.send({data: 'message from server: ' + message.message});
        });
    });

    return io
}
