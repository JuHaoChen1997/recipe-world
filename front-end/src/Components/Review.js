import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div>
      <button onClick={toggleView}>edit this review</button>
      {viewEditForm ? (
        <ReviewForm reviewDetails={review} />
      ) : (
        <div>
          <h4>
            {review.reviewer} <span>{review.rating}</span>
          </h4>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review.review_id)}>delete</button>
        </div>
      )}
    </div>
  );
}

export default Review;
