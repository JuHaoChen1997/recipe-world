import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Reviews from "./Reviews";
import CustomizedAccordions from "./Accordian";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

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
      <Box marginTop={2} marginBottom={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          size="large"
        >
          <Button>
            <ArrowBackIcon />
            <Link to="/recipes">Back</Link>
          </Button>
          <Button>
            <EditIcon />
            <Link to={`/recipes/${recipeId}/edit`}>Edit</Link>
          </Button>
          <Button onClick={handleDelete}>
            <ClearIcon />
            Delete
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <CustomizedAccordions
          timeToPrepare={recipe.time_to_prepare}
          timeToCook={recipe.time_to_cook}
          ingredients={recipe.ingredients}
          directions={recipe.directions}
        />
      </Box>
      <section>
        <Reviews />
      </section>
    </Container>
  );
}

export default RecipeDetails;
