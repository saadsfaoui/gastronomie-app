import React from "react";

function About() {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6", fontFamily: "Arial, sans-serif" }}>
      <h2>À propos de notre Application</h2>
      <p>
        Bienvenue sur notre plateforme de recettes ! Cette application a été conçue pour inspirer votre créativité
        culinaire et vous aider à découvrir de nouvelles recettes du monde entier.
      </p>

      <h3>Objectifs de l'application</h3>
      <ul>
        <li>Explorer une large variété de recettes organisées par catégories.</li>
        <li>Permettre aux utilisateurs de rechercher des recettes spécifiques facilement.</li>
        <li>Offrir une expérience utilisateur agréable et intuitive.</li>
      </ul>

      <h3>À propos de l'équipe</h3>
      <p>
        Nous sommes une équipe passionnée de développeurs et de gourmets qui croyons que la cuisine est un moyen
        universel de se connecter. Notre mission est de rendre les recettes accessibles à tous, quels que soient
        leurs goûts ou leur niveau d'expérience culinaire.
      </p>

      <h3>Technologies utilisées</h3>
      <ul>
        <li>ReactJS pour le développement de l'interface utilisateur.</li>
        <li>Axios pour récupérer des données via des API externes.</li>
        <li>TheMealDB API pour fournir des recettes variées et inspirantes.</li>
        <li>React Router pour la navigation entre les pages.</li>
      </ul>

      <p>
        Nous espérons que vous apprécierez l'expérience ! Si vous avez des suggestions ou des commentaires, n'hésitez
        pas à nous contacter.
      </p>
    </div>
  );
}

export default About;
