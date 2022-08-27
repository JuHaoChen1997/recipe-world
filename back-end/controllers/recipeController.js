//dependencies
const express = require("express");
const { getAllRecipes } = require("../queries/recipes");

//sub routes
const recipeController = express.Router();

//index route
//show all recipes
recipeController.get("/", async (req, res) => {
  try {
    const allRecipes = await getAllRecipes();
    res.status(200).json({ success: true, payload: allRecipes });
  } catch (error) {
    res.status(404).json({ sucess: false });
  }
});

//show route
//get and individual recipe with given id

module.exports = recipeController;
