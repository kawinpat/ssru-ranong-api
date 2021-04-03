const ObjectId = require("mongodb").ObjectID;
const methods = {
    async getHitsAll(req, res) {
        try {
            data = await dbhitsCol
                .aggregate([{ $project: { title: 1, titleImg: 1, date: 1, _id: 1 } }])
                .sort({ date: -1 })
                .toArray();
        } catch (error) {
            console.log("Query 'getNewsAll' is failure", error);
            return res.status(500).send("Query 'getNewsAll' is failure");
        } finally {
            return res.status(200).send(data);
        }
    },
    async getHitsHot(req, res) {
        try {
            data = await dbhitsCol
                .aggregate([
                    { $match: { status: "hot" } },
                    { $project: { title: 1, titleImg: 1, date: 1, _id: 1 } },
                ])
                .sort({ date: -1 })
                .toArray();
        } catch (error) {
            console.log("Query 'getNewsAll' is failure", error);
            return res.status(500).send("Query 'getNewsAll' is failure");
        } finally {
            return res.status(200).send(data);
        }
    },
    async getHitsOne(req, res) {
        let _id = req.body._id;
        try {
            data = await dbhitsCol
                .aggregate([
                    { $match: { _id: ObjectId(`${_id}`) } },
                    { $project: { title: 1, detail: 1, refer: 1, date: 1, maps: 1, _id: 1 } },
                ])
                .toArray();
        } catch (error) {
            console.log("Query 'getNewsOne' is failure", error);
            return res.status(500).send("Query 'getNewsAll' is failure");
        } finally {
            return res.status(200).send(data);
        }
    },
    async saveHitsPost(req, res) {
        title = req.body.title;
        detail = req.body.detail;
        titleImg = req.body.titleImg;
        refer = req.body.refer;
        status = req.body.statusHot;
        maps = req.body.maps;
        try {
            await dbhitsCol.insertOne({
                status: status,
                title: title,
                detail: detail,
                titleImg: titleImg,
                maps: maps,
                refer: refer,
                date: new Date(),
            });
            return res.status(200).send("success");
        } catch (error) {
            console.log("Error saveNewsPost :", error);
            return res.send({ error: "Error saveNewsPost" });
        }
    },
    async deleteHits(req, res) {
        let _id = req.body._id;
        try {
            await dbhitsCol.deleteOne({ _id: ObjectId(`${_id}`) });
            return res.status(200).send();
        } catch (error) {
            console.log("Error deleteHits :", error);
            return res.send({ error: "Error saveNewsPost" });
        }
    },
};

module.exports = {...methods };