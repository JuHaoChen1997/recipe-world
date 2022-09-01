import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

//import routes
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Index />} />
          <Route path="/recipes/new" element={<New />} />
          <Route path="/recipes/:recipeId" element={<Show />} />
          <Route path="/recipes/:recipeId/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
