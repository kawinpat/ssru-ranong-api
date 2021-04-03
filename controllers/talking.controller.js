const ObjectId = require("mongodb").ObjectID;
const methods = {
    async getTalkingAll(req, res) {
        try {
            let result = await dbtalkingCol.find({}).sort({ date: -1 }).toArray();
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .send("Query 'Get talking all' is failure :", error);
        }
    },
    async getTalkingOne(req, res) {
        let _id = req.body._id;
        try {
            let result = await dbtalkingCol
                .find({ _id: ObjectId(`${_id}`) })
                .toArray({});
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    },
    async postNewTalking(req, res) {
        title_tk = req.body.title_tk;
        writer = req.body.writer;
        tk_detail = req.body.tk_detail;
        try {
            await dbtalkingCol.insertOne({
                date: new Date(),
                title_tk: title_tk,
                writer: writer,
                tk_detail: tk_detail,
            });
            return res.status(200).send("success");
        } catch (error) {
            console.log("Error post New Talking :", error);
            return res.send({ error: "Error post New Talking" });
        }
    },
    async getDiscussAnswer(req, res) {
        let id = req.body._id;
        try {
            let resulteDC = await dbdiscussAnsCol.find({ dc_id: id }).toArray();
            return res.status(200).send(resulteDC);
        } catch (error) {
            console.log(error);
        }
    },
    async postDiscussAnswer(req, res) {
        let dc_ans = req.body.dc_ans;
        let dc_writer = req.body.dc_writer;
        let _id = req.body._id;
        try {
            await dbdiscussAnsCol.insertOne({
                date: new Date(),
                dc_writer: dc_writer,
                dc_ans: dc_ans,
                dc_id: _id,
            });
            return res.status(200).send("success");
        } catch (error) {
            console.log(error);
            return res.send({ error: "Error discuss Answer" });
        }
    },
    async deleteDiscuss(req, res) {
        let _id = req.body._id;
        try {
            await dbtalkingCol.deleteOne({ _id: ObjectId(`${_id}`) });
            return res.status(200).send();
        } catch (error) {
            console.log("Error deleteDiscuss :", error);
            return res.send({ error: "Error saveNewsPost" });
        }
    },
};

module.exports = {...methods };