import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: "#ff5722", // Couleur de fond vibrante
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Ajout d'une ombre
      }}
    >
      {/* Titre stylisé */}
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif", // Police moderne
          fontSize: "28px", // Taille ajustée
          color: "#fff", // Texte blanc
          margin: "0",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Ombre élégante
        }}
      >
        Recette App
      </h1>

      {/* Navigation stylisée */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px", // Espacement entre les liens
            margin: 0,
            padding: 0,
          }}
        >
          {/* Liens stylisés */}
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff", // Texte blanc
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s", // Animation au survol
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/popular"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
