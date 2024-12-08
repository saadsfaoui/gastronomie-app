import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes, favorites, setFavorites }) {
  const addToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Explore Our Foods</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Link
            to={`/recipe/${recipe.idMeal}`} // Lien vers les détails de la recette
            state={{ recipe }} // Passe les données de la recette au composant cible
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#333",
              
              margin: "19px 2",
            }}
          >
            
          </Link>
            <div style={{ padding: "15px" }}>
            <Link
            to={`/recipe/${recipe.idMeal}`} state={{ recipe }} ><h3 style={{ textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#333" , margin: "10px 0" }}>{recipe.strMeal}</h3></Link>
              <p style={{ color: "#777", fontSize: "14px" }}>Watch it on YouTube!</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => addToFavorites(recipe)}
                  style={{
                    backgroundColor: "#ff5722",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    
                  }}
                >
                  ❤️ Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
