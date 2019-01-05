const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');

const getallusersHandler = (req, res) => {
    MongoClient.connect(config.connectionUrl, (err, client) => {
        client.db(config.dbName).collection(config.collectionNameUsers).find({}).toArray((err, users) => {
            const usersToSend = users.map(user => {
                return {
                    username: user.username
                }
            });

            res.send({success: true, users: usersToSend});
            client.close();
        });
    });
};

module.exports = getallusersHandler;
