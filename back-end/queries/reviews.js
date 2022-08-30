//code referenced from
//https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/full-stack-express/pern-one-to-many-1/reviews.js

const db = require("../db/dbConfig.js");

const getAllReviews = async (recipe_id) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE id_of_recipe=$1",
      recipe_id
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};

const getReview = async (id) => {
  try {
    const oneReview = await db.one(
      "SELECT * FROM reviews WHERE review_id=$1",
      id
    );
    return oneReview;
  } catch (error) {
    return error;
  }
};

const newReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, content, rating, id_of_recipe) VALUES($1, $2, $3, $4) RETURNING *",
      [review.reviewer, review.content, review.rating, review.id_of_recipe]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE review_id=$1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id, review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, content=$2, rating=$3, id_of_recipe=$4 where review_id=$5 RETURNING *",
      [review.reviewer, review.content, review.rating, review.id_of_recipe, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
};
