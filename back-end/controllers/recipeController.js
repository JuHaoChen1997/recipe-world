//dependencies
const express = require("express");
const {
  getAllRecipes,
  getOneRecipe,
  postNewRecipe,
} = require("../queries/recipes");

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
//get an individual recipe with given id
recipeController.get("/:recipeId", async (req, res) => {
  const { recipeId } = req.params;

  try {
    const returnedRecipe = await getOneRecipe(recipeId);

    res.status(200).json({ success: true, payload: returnedRecipe });
  } catch (error) {
    res.status(404).json({ success: false });
  }
});
//show route
//get and individual recipe with given id

//new route
//add a recipe into the database
recipeController.post("/", async (req, res) => {
  const newRecipe = req.body;

  try {
    const postedRecipe = await postNewRecipe(newRecipe);
    res.status(200).json({ success: true, payload: postedRecipe[0] });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});

module.exports = recipeController;
