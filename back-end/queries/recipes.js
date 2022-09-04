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

//add update recipe route
const updateTheRecipe = async (recipe, recipeId) => {
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
    const updatedRecipe = await db.one(
      "UPDATE recipes SET recipe_name=$1,time_to_prepare=$2, time_to_cook=$3,author=$4,picture_link=$5,ingredients=$6,directions=$7 WHERE recipe_id=$8 RETURNING *",
      [
        recipe_name,
        time_to_prepare,
        time_to_cook,
        author,
        picture_link,
        ingredients,
        directions,
        recipeId,
      ]
    );
    return updatedRecipe;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

//delete an individual recipe with given id
const deleteRecipe = async (recipeId) => {
  try {
    const deletedRecipe = db.one(
      "DELETE FROM recipes WHERE recipe_id=$1 RETURNING *",
      recipeId
    );
    return deletedRecipe;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  postNewRecipe,
  updateTheRecipe,
  deleteRecipe,
};
