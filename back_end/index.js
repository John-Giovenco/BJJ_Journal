require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//express settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes & Controllers

app.use(express.urlencoded({ extended: true }));

app.use("/moves", require("./controllers/moves"));
