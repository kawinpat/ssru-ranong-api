"use strict";

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { connectMongodb } = require("./configs/mongodb");

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ extended: false }));

app.use(require('./routes'))

// Connect Databse
connectMongodb(app);