import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div>
      <div>
        {viewEditForm ? (
          <ReviewForm
            reviewDetails={review}
            toggleView={toggleView}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h4>
              {review.reviewer} <span>{review.rating}</span>
            </h4>
            <p>{review.content}</p>
          </div>
        )}
      </div>
      <Box marginTop={2} marginBottom={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button onClick={toggleView}>
            {viewEditForm ? "Nevermind" : "Edit"}
          </Button>
          <Button onClick={() => handleDelete(review.review_id)}>Delete</Button>
        </ButtonGroup>
        <hr />
      </Box>
    </div>
  );
}

export default Review;
