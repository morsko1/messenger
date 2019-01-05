const router = require('express').Router();
const config = require('../config');

const registerHandler = require('./parts/register.js');
const loginHandler = require('./parts/login.js');
const verifytokenHandler = require('./parts/verifytoken.js');
const getallusersHandler = require('./parts/getallusers.js');
const startchatHandler = require('./parts/startchat.js');

const tokenVerifier = require('./utils/tokenVerifier.js');

router.post('/api/register', registerHandler);
router.post('/api/login', loginHandler);

router.use(tokenVerifier);

router.get('/api/verifytoken', verifytokenHandler);
router.get('/api/getallusers', getallusersHandler);
router.post('/api/startchat', startchatHandler);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../' ,config.pathToHtml));
});

module.exports = router;
