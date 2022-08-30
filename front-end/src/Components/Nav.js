import "./Nav.css";
import { Link } from "react-router-dom";
const pastaPic = require("../assets/Dish_Pasta_Spaghetti_26373.png");

function Nav() {
  return (
    <nav className="navBar">
      <img src={pastaPic} alt="pasta_icon" className="pastIcon" />
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/recipes/new">New Recipes</Link>
    </nav>
  );
}

export default Nav;
