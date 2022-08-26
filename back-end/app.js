//dependencies
const express = require("express");
const cors = require("cors");
const recipeController = require("./controllers/recipeController");

//configuration
const app = express();

//middleware
app.use(cors()); //allows cross origin requests
app.use(express.json()); //parse request body into json format

//Routes
//basic root route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to recipe world!");
});

//Export
module.exports = app;
