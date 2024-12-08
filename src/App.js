import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";
import Popular from "./components/Popular";
import axios from "axios";
import Menu from "./components/Menu";
import About from "./components/About"; 
import RecipeDetails from "./components/RecipeDetails";



function App() {
  const [recipes, setRecipes] = useState([]); // Contient les recettes affichées
  const [favorites, setFavorites] = useState([]); // Contient les favoris

  // Charger des recettes aléatoires au chargement de Home
  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const randomRecipes = [];
      for (let i = 0; i < 6; i++) {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        randomRecipes.push(response.data.meals[0]);
      }
      setRecipes(randomRecipes);
    };
    fetchRandomRecipes();
  }, []); // Appelé au chargement de la page uniquement

    
    
    

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Page Home : affiche les recettes aléatoires */}
          <Route
            path="/"
            element={
              <>
                
                <SearchBar setRecipes={setRecipes} />
                <RecipeList recipes={recipes} favorites={favorites} setFavorites={setFavorites} />
              </>
            }
          />

          {/* Page Popular */}
          <Route path="/popular" element={<Popular />} />

          {/* Page des favoris */}
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/menu" element={<Menu />} />

          {/* Page "À propos" */}
         
           <Route path="/about" element={<About />} />
           <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
