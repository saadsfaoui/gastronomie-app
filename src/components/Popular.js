import React, { useEffect, useState } from "react";
import axios from "axios";

function Popular({ favorites, setFavorites }) {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      setPopularRecipes(response.data.meals || []);
    };
    fetchPopularRecipes();
  }, []);



return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Popular Recipes</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {popularRecipes.map((recipe) => (
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
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
