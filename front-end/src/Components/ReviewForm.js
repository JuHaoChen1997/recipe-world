import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { recipeId } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    content: "",
    rating: "",
    id_of_recipe: recipeId,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [recipeId, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, recipeId);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      content: "",
      rating: "",
      id_of_recipe: recipeId,
    });
  };

  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="reviewer">Name:</label>
        <input
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={review.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
