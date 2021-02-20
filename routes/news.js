const router = require('express').Router()
const controllers = require("../controllers/news.controller.js");

router.get('/', (req, res) => {
    return res.send('Hello SSRU Project API')
})

router.get('/all', controllers.getNewsAll)
router.post('/post', controllers.saveNewsPost)
router.post('/one', controllers.getNewsOne)

module.exports = router