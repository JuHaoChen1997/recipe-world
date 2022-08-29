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
}

export default RecipeNewForm;
