import axios from "axios";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

//get the API url
const API = process.env.REACT_APP_API_URL;
console.log("API is", API);

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
    <section>
      {recipes.map((recipe, index) => {
        return <Recipe data={recipe} key={index} />;
      })}
    </section>
  );
}

export default Recipes;
