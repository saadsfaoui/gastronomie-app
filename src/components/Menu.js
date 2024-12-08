import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Menu() {
  const [categories, setCategories] = useState([]); // Toutes les catégories
  const [menuItems, setMenuItems] = useState({}); // Les plats par catégorie

  // Récupérer les catégories au chargement
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };
    fetchCategories();
  }, []);

  // Charger les plats par catégorie
  useEffect(() => {
    const fetchMenuItems = async () => {
      const itemsByCategory = {};

      for (const category of categories) {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
          itemsByCategory[category.strCategory] = response.data.meals.slice(0, 3); // Récupérer 3 plats
        } catch (error) {
          console.error(`Erreur lors de la récupération des plats pour la catégorie ${category.strCategory}:`, error);
        }
      }

      setMenuItems(itemsByCategory);
    };

    if (categories.length > 0) {
      fetchMenuItems();
    }
  }, [categories]);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "2.5rem", color: "#4A4A4A", marginBottom: "40px" }}>Menu du Restaurant</h2>

      {Object.keys(menuItems).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "2rem", color: "#ff5722", marginBottom: "20px", textAlign: "center" }}>{category}</h3>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
            {menuItems[category]?.map((meal) => (
              <div
                key={meal.idMeal}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  border: "1px solid #ddd",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "250px",
                  textAlign: "center",
                  padding: "15px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Redirige vers la page de détails quand on clique sur l'image */}
                <Link to={`/recipe/${meal.idMeal}`} state={{ meal }} style={{ textDecoration: "none" }}>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      transition: "transform 0.3s",
                    }}
                  />
                </Link>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
                  <Link to={`/recipe/${meal.idMeal}`} state={{ meal }} style={{ color: "#333", textDecoration: "none" }}>
                    {meal.strMeal}
                  </Link>
                </h4>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "15px" }}>Découvrez cette recette!</p>

                {/* Bouton d'ajout aux favoris */}
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
