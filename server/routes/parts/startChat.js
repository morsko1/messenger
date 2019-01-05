const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');

const startchatHandler = (req, res) => {
    MongoClient.connect(config.connectionUrl, (err, client) => {
        console.log('req.body =', req.body);
        const itemToInsert = {
            participants: req.body.participants
        }
        // todo: insert only if chat doesn't exist
        client.db(config.dbName).collection(config.collectionNameChats).insertOne(itemToInsert, (err, result) => {
            if (err) {
                res.send(err);
                client.close();
            }
            res.send({success: true});
            client.close();
       });
    });
};

module.exports = startchatHandler;
