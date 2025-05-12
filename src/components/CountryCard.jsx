import React from "react";
import "./CountryCard.css";

function CountryCard({ name, img }) {
  return (
    <div className="country-card">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default CountryCard;
