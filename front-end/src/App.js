import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

//import routes
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import ContactDeveloper from "./pages/ContactDeveloper";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container sx={{ marginY: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Index />} />
          <Route path="/recipes/new" element={<New />} />
          <Route path="/recipes/:recipeId" element={<Show />} />
          <Route path="/recipes/:recipeId/edit" element={<Edit />} />
          <Route path="/contact" element={<ContactDeveloper />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
