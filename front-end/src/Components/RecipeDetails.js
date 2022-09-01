import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Reviews from "./Reviews";
import CustomizedAccordions from "./Accordian";
import { Typography } from "@mui/material";

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

  const handleDelete = () => {
    axios
      .delete(`${API}/recipes/${recipeId}`)
      .then((response) => {
        navigate("/recipes");
      })
      .catch((error) => console.error("catch", error));
  };

  return (
    // <section>
    //   <div>
    //     <h2>{recipe.recipe_name}</h2>
    //     <p>{recipe.directions}</p>
    //   </div>
    //   <div>
    //     <Link to="/recipes">
    //       <button>Back</button>
    //     </Link>
    //     <button>
    //       <Link to={`/recipes/${recipeId}/edit`}>Edit</Link>
    //     </button>
    //   </div>

    //   <button onClick={handleDelete}>Delete</button>

    //   <section>
    //     <Reviews />
    //   </section>
    // </section>
    <Container sx={{ width: 900 }}>
      <Typography variant="h4" component="h1" marginTop={3}>
        {recipe.recipe_name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src={recipe.picture_link}
          alt={recipe.recipe_name}
          height={325}
          width={500}
        />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Author: {recipe.author}
        </Typography>
      </Box>
      <Box>
        <CustomizedAccordions
          timeToPrepare={recipe.time_to_prepare}
          timeToCook={recipe.time_to_cook}
          ingredients={recipe.ingredients}
          directions={recipe.directions}
        />
      </Box>
    </Container>
  );
}

export default RecipeDetails;
