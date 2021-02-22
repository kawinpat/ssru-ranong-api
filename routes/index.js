const router = require('express').Router()

router.use(`/api/news`, require('./news'));
router.use(`/api/talking`, require('./talking'));

module.exports = router