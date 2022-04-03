const mongodb = require("mongodb");
require("dotenv").config();

const mongodUrl = process.env.DATABASE_URL;

// Database
const connectMongodb = (app) => {
    const port = process.env.PORT;
    console.log("Start connect...");
    mongodb.MongoClient.connect(mongodUrl, {
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((client) => {
            console.log("Mongo Connected!");
            global.dbClient = client;
            global.dbnewsCol = client.db("ranong").collection("news");
            global.dbhitsCol = client.db("ranong").collection("hits");
            global.dbtalkingCol = client.db("ranong").collection("talking");
            global.dbdiscussAnsCol = client.db("ranong").collection("discuss_ans");
            app.listen(port, () => console.info(`REST API RUNNUNG ON PORT ${port}`));
        })
        .catch((error) => console.error("MongoClient Connect Failed : ", error));

    // process.on('SIGINT', () => {
    //     dbClient.close();
    // });
};

module.exports = { connectMongodb };