require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();

//express settings

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes & Controllers

app.use(express.urlencoded({ extended: true }));

app.use("/moves", require("./controllers/moves"));
app.use("/users", require("./controllers/users"));
app.use("/authentication", require("./controllers/authentication"));

//connection

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});

module.exports = router;
