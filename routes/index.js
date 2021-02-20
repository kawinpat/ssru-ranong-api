const router = require('express').Router()

router.use(`/api/news`, require('./news'))

module.exports = router