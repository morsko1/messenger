const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('./config');

const connectionUrl = 'mongodb://localhost:27017/';
const dbName = 'messenger';
const collectionName = 'users';
const pathToHtml = '/../client/build/index.html';

app.use(bodyParser.json());

app.use('/', express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, pathToHtml));
});

const port = 8080;

app.listen(port, () => {
    console.log(`listen on ${port}`);
});
