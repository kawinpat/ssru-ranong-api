const router = require('express').Router();
const controllers = require("../controllers/talking.controller.js");


router.get('/', (req, res) => {
    return res.send('Hello SSRU Project API')
})

router.get('/all', controllers.getTalkingAll);
router.post('/one', controllers.getTalkingOne);
router.post('/post', controllers.postNewTalking);
router.post('/discuss/post', controllers.postDiscussAnswer);
router.post('/discuss/answer', controllers.getDiscussAnswer);

module.exports = router