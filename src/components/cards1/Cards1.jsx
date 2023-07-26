import React from "react";
import "./Cards1.css";
import Card1 from "../card1/Card1";

const Cards1 = ({ characters }) => {
  const left = characters.cardLeft.name ? characters.cardLeft : null;
  const right = characters.cardRight.name ? characters.cardRight : null;

  return (
    <div className="cards">
      <Card1
        character={left}
        image=""
        name="name"
        id="id"
        homeworld="homeworld"
        species=""
        height=""
        mass=""
        gender=""
        // styles={{ border: "2px solid red", color: 'black' }}
      />

      <Card1
        character={right}
        image=""
        name="name"
        id="id"
        homeworld="homeworld"
        species=""
        height=""
        mass=""
        gender=""
        // styles={{ border: "2px solid blue", color: 'black' }}
      />
    </div>
  );
};

export default Cards1;
