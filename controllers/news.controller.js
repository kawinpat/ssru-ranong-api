const ObjectId = require("mongodb").ObjectID;

const methods = {
    async getNewsAll(req, res) {
        try {
            data = await dbnewsCol
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
    async getNewsOne(req, res) {
        let _id = req.body._id;
        try {
            data = await dbnewsCol
                .aggregate([
                    { $match: { _id: ObjectId(`${_id}`) } },
                    { $project: { title: 1, detail: 1, date: 1, _id: 1 } },
                ])
                .toArray();
        } catch (error) {
            console.log("Query 'getNewsOne' is failure", error);
            return res.status(500).send("Query 'getNewsAll' is failure");
        } finally {
            return res.status(200).send(data);
        }
    },
    async saveNewsPost(req, res) {
        title = req.body.title;
        detail = req.body.detail;
        titleImg = req.body.titleImg;
        try {
            await dbnewsCol.insertOne({
                title: title,
                detail: detail,
                titleImg: titleImg,
                date: new Date(),
            });
            return res.status(200).send("success");
        } catch (error) {
            console.log("Error saveNewsPost :", error);
            return res.send({ error: "Error saveNewsPost" });
        }
    },
};

module.exports = {...methods };