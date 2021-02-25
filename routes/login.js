const router = require('express').Router()
const controllers = require("../controllers/login.controller.js");

router.get('/', (req, res) => {
    return res.send('Hello SSRU Project API')
})

router.post('/admin', controllers.hasLoggedIn)

module.exports = router