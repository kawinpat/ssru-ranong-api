const mongodb = require("mongodb");
require("dotenv").config();

const mongodUrl = process.env.DATABASE_URL;

// Database
const connectMongodb = (app) => {
    const port = process.env.PORT;
    mongodb.MongoClient.connect(mongodUrl, {
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((client) => {
            console.log("Mongo Connected!");
            global.dbClient = client;
            global.dbnewsCol = client.db("ranong").collection("news");
            global.dbtalkingCol = client.db("ranong").collection("talking");
            global.dbdiscussAnsCol = client.db("ranong").collection("discuss_ans");
            app.listen(port, () => console.info(`REST API RUNNUNG ON PORT ${port}`));
        })
        .catch((error) => console.error("MongoClient Connect Failed : ", error));

    // process.on("SIGINT", () => {
    //     dbClient.close();
    //     process.exit();
    // });
};

module.exports = { connectMongodb };