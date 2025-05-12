import React from "react";
import "./CountryCard.css";

// Function to render each country card
function CountryCard({ name, img }) {
  return (
    <div className="countryCard">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default CountryCard;
