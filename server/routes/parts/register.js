const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const config = require('../../config');

const registerHandler = (req, res) => {
    MongoClient.connect(config.connectionUrl, (err, client) => {
        client.db(config.dbName).collection(config.collectionNameUsers).findOne({
            username: req.body.username
        }, (err, user) => {
            if (user !== null) {
                res.send({success: false, error: 'Имя уже занято'});
                client.close();
                return;
            }

            MongoClient.connect(config.connectionUrl, (err, client) => {
                const passwordHash = bcrypt.hashSync(req.body.password, 10);
                client.db(config.dbName).collection(config.collectionNameUsers).insertOne({
                    username: req.body.username,
                    email: req.body.email,
                    passwordHash: passwordHash,
                    isAdmin: false
                }, (err, result) => {
                    if (err) {
                        res.send(err);
                        client.close();
                    }
                    res.send({success: true});
                    client.close();
               });
            });

        });
    });
};

module.exports = registerHandler;
