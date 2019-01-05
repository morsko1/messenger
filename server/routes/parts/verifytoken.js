const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const secret = require('../../secret');
const config = require('../../config');

const verifytokenHandler = (req, res) => {
    const token = req.headers['authorization'].replace('Bearer ', '');
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.send({success: false, error: 'token error'});
        }

        const userId = decoded._id;

        MongoClient.connect(config.connectionUrl, (err, client) => {
            client.db(config.dbName).collection(config.collectionNameUsers).findOne({
                '_id': new ObjectID(userId)
            }, (err, user) => {
                if (user === null) {
                    res.send({success: false, error: 'can not find user by token'});
                    client.close();
                    return;
                } else {
                    const userToSend = {
                        username: user.username,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        chats: user.chats
                    };
                    res.send({success: true, user: userToSend});
                    client.close();
                }
            });
        });
    });
};

module.exports = verifytokenHandler;
