const router = require("express").Router();
const controllers = require("../controllers/hits.controller.js");

router.get("/", (req, res) => {
    return res.send("Hello SSRU Project API");
});

router.get("/all", controllers.getHitsAll);
router.get("/hot", controllers.getHitsHot);
router.post("/post", controllers.saveHitsPost);
router.post("/one", controllers.getHitsOne);
router.post("/delete", controllers.deleteHits);

module.exports = router;