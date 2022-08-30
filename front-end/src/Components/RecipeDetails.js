import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function RecipeDetails() {
  const { recipeId } = useParams(); //get the recipeId from the browser url
  const [recipe, setRecipe] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/recipes/${recipeId}`)
      .then((response) => {
        setRecipe(response.data.payload);
      })
      .catch((error) => console.error("catch", error));
  }, [recipeId]);

  return (
    <section>
      <div>
        <h2>{recipe.recipe_name}</h2>
        <p>{recipe.directions}</p>
      </div>
      <div>
        <Link to="/recipes">
          <button>Back</button>
        </Link>
        <button>
          <Link to={`/recipes/${recipeId}/edit`}>Edit</Link>
        </button>
      </div>
      <section>
        <Reviews />
      </section>
    </section>
  );
}

export default RecipeDetails;
