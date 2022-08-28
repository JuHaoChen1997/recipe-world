//import the db object
const db = require("../db/dbConfig.js");

//get all recipes from the database
const getAllRecipes = async () => {
  try {
    const allRecipes = await db.any("SELECT * FROM recipes");
    return allRecipes;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//get one recipe with given id
const getOneRecipe = async (recipeId) => {
  try {
    const returnedRecipe = await db.one(
      "SELECT * FROM recipes WHERE recipe_id=$1",
      recipeId
    );
    console.log(returnedRecipe);
    return returnedRecipe;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = { getAllRecipes, getOneRecipe };
