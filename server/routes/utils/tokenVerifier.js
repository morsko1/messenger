const path = require('path');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const secret = require('../../secret');

const tokenVerifier = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].replace('Bearer ', '');

    if (!token) {
        return res.sendFile(path.join(__dirname, config.pathToHtml));
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.sendFile(path.join(__dirname, config.pathToHtml));
        }
        next();
    });
}

module.exports = tokenVerifier;
