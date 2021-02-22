const router = require('express').Router()

router.get('/', (req, res) => res.send("Hello world"))
router.use(`/api/news`, require('./news'));
router.use(`/api/talking`, require('./talking'));

module.exports = router