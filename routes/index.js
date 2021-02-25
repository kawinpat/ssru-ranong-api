const router = require('express').Router()

router.get('/', (req, res) => res.send("Hello world"))
router.use(`/api/news`, require('./news'));
router.use(`/api/talking`, require('./talking'));
router.use(`/api/login`, require('./login'));
router.use(`/api/logOut`, require('./logOut'));

module.exports = router