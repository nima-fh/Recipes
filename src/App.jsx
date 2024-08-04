import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar_Component } from "./components/navbar";
import Create from "./pages/create/create";
import Home from "./pages/home/home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/search/search";
import ThemeSelector from "./components/ThemSelector";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar_Component />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/Recipes/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
