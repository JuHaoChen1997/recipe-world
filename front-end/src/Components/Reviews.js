import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "./Reviews.css";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { recipeId } = useParams();

  useEffect(() => {
    axios.get(`${API}/recipes/${recipeId}/reviews`).then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, [recipeId]);

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/recipes/${recipeId}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/recipes/${recipeId}/reviews/${id}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.review_id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(
        `${API}/recipes/${recipeId}/reviews/${updatedReview.review_id}`,
        updatedReview
      )
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.review_id === updatedReview.review_id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section>
      <hr />
      <h2 className="reviewSection">Reviews</h2>
      <div className="newReview">
        <ReviewForm handleSubmit={handleAdd}>
          <h3>Add a New Review</h3>
        </ReviewForm>
      </div>
      {reviews.length > 0
        ? reviews.map((review, index) => (
            <Review
              key={index}
              review={review}
              handleSubmit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        : null}
    </section>
  );
}

export default Reviews;
