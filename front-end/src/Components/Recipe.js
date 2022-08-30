import { Link } from "react-router-dom";
import "./Recipe.css";

function Recipe(props) {
  const {
    recipe_id,
    recipe_name,
    time_to_prepare,
    time_to_cook,
    picture_link,
  } = props.data;

  return (
    <div>
      <Link to={`/recipes/${recipe_id}`}>
        <img src={picture_link} alt={`${recipe_name}`} className="recipeImg" />
        <h3>{recipe_name}</h3>
      </Link>
    </div>
  );
}

export default Recipe;
