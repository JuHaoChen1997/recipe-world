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

//add recipe into the database
const postNewRecipe = async (recipe) => {
  let {
    recipe_name,
    time_to_prepare,
    time_to_cook,
    author,
    picture_link,
    ingredients,
    directions,
  } = recipe;

  try {
    const newRecipe = await db.any(
      "INSERT INTO recipes (recipe_name,time_to_prepare,time_to_cook,author,picture_link,ingredients,directions) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [
        recipe_name,
        time_to_prepare,
        time_to_cook,
        author,
        picture_link,
        ingredients,
        directions,
      ]
    );
    return newRecipe;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = { getAllRecipes, getOneRecipe, postNewRecipe };
