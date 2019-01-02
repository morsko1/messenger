const router = require('express').Router();
const config = require('../config');

const registerHandler = require('./parts/register.js');
const loginHandler = require('./parts/login.js');
const verifytokenHandler = require('./parts/verifytoken.js');

const tokenVerifier = require('./utils/tokenVerifier.js');

router.post('/api/register', registerHandler);
router.post('/api/login', loginHandler);

router.use(tokenVerifier);

router.get('/api/verifytoken', verifytokenHandler);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.pathToHtml));
});

module.exports = router;
