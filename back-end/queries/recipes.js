//import the db object
const db = require("../db/dbConfig.js");

//get all recipes from the database
const getAllRecipes = async () => {
  try {
    const allRecipes = await db.any("SELECT * FROM recipes");
    console.log("hello", allRecipes);
    return allRecipes;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = { getAllRecipes };
