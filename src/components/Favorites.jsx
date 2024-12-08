import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importer l'icône poubelle de react-icons
import { Link } from "react-router-dom";

function Favorites({ favorites, setFavorites }) {
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mes Recettes Favorites</h2>
      {favorites.length === 0 && <p>Aucune recette favorite.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favorites.map((recipe) => (
          <div className="favorite-card"
            key={recipe.idMeal}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
           <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
            // Redirection sur le clic de l'image
            onClick={() => {
              window.location.href = `/recipe/${recipe.idMeal}`;
            }}
          />
          <Link
            to={`/recipe/${recipe.idMeal}`}
            state={{ recipe }}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#333",
              display: "block",
              margin: "10px 0",
            }}
          >
            {recipe.strMeal}
          </Link>
            <h3>{recipe.strMeal}</h3>
            <button
              onClick={() => removeFromFavorites(recipe.idMeal)}
              style={{
                backgroundColor: "#ff5722",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <FaTrashAlt /> Retirer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
