const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/');
const sockets = require('./sockets/');

const server = http.createServer(app);
const io = sockets.listen(server);
server.listen(3000);

app.use(bodyParser.json());

app.use('/', express.static('client/build'));

app.use(routes);

const port = 8080;

app.listen(port, () => {
    console.log(`listen on ${port}`);
});
