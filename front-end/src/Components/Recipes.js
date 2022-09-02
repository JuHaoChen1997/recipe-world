import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Grid from "@mui/material/Grid";

//get the API url
const API = process.env.REACT_APP_API_URL;

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recipes`)
      .then((response) => {
        setRecipes(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={5}>
      {recipes.map((recipe, index) => {
        return <Recipe data={recipe} key={index} />;
      })}
    </Grid>
  );
}

export default Recipes;
