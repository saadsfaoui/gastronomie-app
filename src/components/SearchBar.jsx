import React from "react";

function SearchBar({ setRecipes }) {
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  return (
    <div style={{
      backgroundImage: './background.jpg', // Remplacez par votre URL d'image
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "50px",
      textAlign: "center",
      color: "white",
    }}>
      <h2>Explore Our Recipes</h2>
      <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="search"
          placeholder="Search for a recipe..."
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#ff5722",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
