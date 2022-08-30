//resource from
//https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/full-stack-express/pern-one-to-many-1/reviewsController.js

const express = require("express");

const reviews = express.Router({ mergeParams: true });

const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// INDEX
reviews.get("/", async (req, res) => {
  const { recipeId } = req.params;

  const allReviews = await getAllReviews(recipeId);
  if (allReviews[0]) {
    res.status(200).json(allReviews);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedReview = await updateReview(id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(404).json("Review not found");
  }
});

//POST
reviews.post("/", async (req, res) => {
  const review = await newReview(req.body);
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await deleteReview(id);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = reviews;
