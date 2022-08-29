import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//API url
const API = process.env.REACT_APP_API_URL;

function RecipeNewForm() {
  const [newRecipe, setNewRecipe] = useState({
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

  const addNewRecipe = (newRecipe) => {
    axios
      .post(`${API}/recipes/`, newRecipe)
      .then(() => {
        navigate("/recipes");
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewRecipe(newRecipe);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipe_name">Name: </label>
          <input
            id="recipe_name"
            value={newRecipe.recipe_name}
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
            value={newRecipe.time_to_prepare}
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
            value={newRecipe.time_to_cook}
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
            value={newRecipe.author}
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
            value={newRecipe.picture_link}
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
            value={newRecipe.ingredients}
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
            value={newRecipe.directions}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <input type="submit" value="Create New Recipe" />
      </form>
      <button type="button">
        <Link to="/recipes">Back</Link>
      </button>
    </section>
  );
}

export default RecipeNewForm;
