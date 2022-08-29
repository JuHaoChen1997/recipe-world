import { Routes, Route } from "react-router-dom";

//import routes
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
