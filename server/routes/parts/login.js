const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../../secret');
const config = require('../../config');

const loginHandler = (req, res) => {
    MongoClient.connect(config.connectionUrl, (err, client) => {
        client.db(config.dbName).collection(config.collectionName).findOne({
            username: req.body.username
        }, (err, user) => {
            if (user === null) {
                res.send({success: false, error: 'Пользователя с таким именем не существует'});
                client.close();
                return;
            }
            // compare password and hash
            if (bcrypt.compareSync(req.body.password, user.passwordHash)) {
                const token = jwt.sign({_id: user._id}, secret);
                const userToSend = {
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin
                };
                res.send({success: true, user: userToSend, token: token});
                client.close();
            } else {
                res.send({success: false, error: 'Неверный пароль'});
                client.close();
                return;
            }
        });
    });
};

module.exports = loginHandler;
