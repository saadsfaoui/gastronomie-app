import React from "react";
import { useLocation } from "react-router-dom";

function RecipeDetails() {
  const location = useLocation();
  const recipe = location.state?.recipe; // Récupère les données passées via Link

  if (!recipe) {
    return <p>Aucune recette sélectionnée. Veuillez réessayer.</p>;
  }

  // Fonction pour obtenir les ingrédients et mesures
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }}
      />
      <p><strong>Catégorie :</strong> {recipe.strCategory}</p>
      <p><strong>Nationalité :</strong> {recipe.strArea}</p>
      <h2>Ingrédients :</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions :</h2>
      <p style={{ textAlign: "justify", lineHeight: "1.6" }}>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ff6347",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
}

export default RecipeDetails;
