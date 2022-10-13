import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="singleCocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
