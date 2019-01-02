const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/');

app.use(bodyParser.json());

app.use('/', express.static('client/build'));

app.use(routes);

const port = 8080;

app.listen(port, () => {
    console.log(`listen on ${port}`);
});
