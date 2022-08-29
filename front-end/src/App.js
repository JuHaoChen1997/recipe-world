import { Routes, Route } from "react-router-dom";

//import routes
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Index />} />
        <Route path="/recipes/:recipeId" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
