import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const CharacterCard = ({ character: { name, image } }) => {
  return (
    <div className="card-item" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-container">
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default CharacterCard;
