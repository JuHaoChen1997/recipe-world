import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./RecipeNewForm.css";

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
      <form onSubmit={handleSubmit} className="form">
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
          <textarea
            id="ingredients"
            value={newRecipe.ingredients}
            type="text"
            onChange={handleTextChange}
            required
            rows="5"
          />
        </div>
        <br />
        <div>
          <label htmlFor="directions">Directions: </label>
          <textarea
            id="directions"
            value={newRecipe.directions}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <Box marginTop={2} marginBottom={2}>
          <Button variant="contained">
            <input type="submit" value="Create New Recipe" />
          </Button>
        </Box>
      </form>
      <Box marginTop={2} marginBottom={2}>
        <Button variant="contained">
          {" "}
          <Link to="/recipes">Back</Link>
        </Button>
        <hr />
      </Box>
    </section>
  );
}

export default RecipeNewForm;
