import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//API url
const API = process.env.REACT_APP_API_URL;

function RecipeEditForm() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({
    recipe_id: "",
    recipe_name: "",
    time_to_prepare: 0,
    time_to_cook: 0,
    author: "",
    picture_link: "",
    ingredients: "",
    directions: "",
  });

  const navigate = useNavigate();

  const updateRecipe = (recipe) => {
    axios
      .put(`${API}/recipes/${recipeId}`, recipe)
      .then(() => {
        navigate("/recipes");
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    axios
      .get(`${API}/recipes/${recipeId}`)
      .then((response) => {
        setRecipe(response.data.payload);
      })
      .catch((error) => console.error("catch", error));
  }, [recipeId]);

  const handleTextChange = (event) => {
    setRecipe({ ...recipe, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipe_name">Name: </label>
          <input
            id="recipe_name"
            value={recipe.recipe_name}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="time_to_prepare">Time to prepare: </label>
          <input
            id="time_to_prepare"
            value={recipe.time_to_prepare}
            type="number"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="time_to_cook">Time to cook: </label>
          <input
            id="time_to_cook"
            value={recipe.time_to_cook}
            type="number"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            value={recipe.author}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="picture_link">Picture Link: </label>
          <input
            id="picture_link"
            value={recipe.picture_link}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <input
            id="ingredients"
            value={recipe.ingredients}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="directions">Directions: </label>
          <input
            id="directions"
            value={recipe.directions}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <input type="submit" value="Edit Recipe" />
      </form>
      <button type="button">
        <Link to="/recipes">Back</Link>
      </button>
    </section>
  );
}

export default RecipeEditForm;
