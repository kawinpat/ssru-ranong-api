const router = require('express').Router()
const controllers = require("../controllers/logout.controller.js");

router.get('/', (req, res) => {
    return res.send('Hello SSRU Project API')
})

router.post('/admin', controllers.hasLoggedOut)

module.exports = router