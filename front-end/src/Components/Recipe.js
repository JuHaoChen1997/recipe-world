import { Link } from "react-router-dom";

function Recipe(props) {
  const {
    recipe_name,
    time_to_prepare,
    time_to_cook,
    author,
    picture_link,
    ingredients,
    directions,
  } = props.data;

  return (
    <div>
      <h2>{recipe_name}</h2>
    </div>
  );
}

export default Recipe;
