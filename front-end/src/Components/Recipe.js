import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import "./Recipe.css";

function Recipe(props) {
  const {
    recipe_id,
    recipe_name,
    time_to_prepare,
    time_to_cook,
    picture_link,
    author,
  } = props.data;

  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <Link to={`/recipes/${recipe_id}`}>
          <img
            src={picture_link}
            alt={`${recipe_name}`}
            className="recipeImg"
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {recipe_name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                Prepare Time:{" " + time_to_prepare} mins
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                Cook Time:{" " + time_to_cook} mins
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Typography variant="h6" component="h3" marginTop={0}>
                Author: {author}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
}

export default Recipe;
