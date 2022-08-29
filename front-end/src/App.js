import { Routes, Route } from "react-router-dom";

//import routes
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Index />} />
        <Route path="/recipes/:recipeId" element={<Show />} />
        <Route path="/recipes/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
