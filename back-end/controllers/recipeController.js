//dependencies
const express = require("express");
const {
  getAllRecipes,
  getOneRecipe,
  postNewRecipe,
  updateTheRecipe,
  deleteRecipe,
} = require("../queries/recipes");

const reviewsController = require("./reviewsController");

//sub routes
const recipeController = express.Router();

//index route
//show all recipes
recipeController.get("/", async (req, res) => {
  const { recipeId } = req.params;

  try {
    const allRecipes = await getAllRecipes(recipeId);
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

//edit route
//edit a recipe inside the database
recipeController.put("/:recipeId", async (req, res) => {
  const { recipeId } = req.params;

  try {
    const updatedRecipe = await updateTheRecipe(req.body, recipeId);
    res.status(200).json({ success: true, payload: updatedRecipe });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});

//delete route
//delete individual recipe with given id
recipeController.delete("/:recipeId", async (req, res) => {
  const { recipeId } = req.params;

  try {
    const deletedRecipe = await deleteRecipe(recipeId);
    res.status(200).json({ success: true, payload: deletedRecipe });
  } catch (error) {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

//nested reviews route
recipeController.use("/:recipeId/reviews", reviewsController);

module.exports = recipeController;
