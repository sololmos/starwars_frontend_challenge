import React from "react";
import "./Card.css";



const Card = ({photo, heading, detail}) => {
   
    return (
        <div className="card" >
            <img src={photo} style={{width : '50px', height : '50px'}} alt= "" />
            <span>{heading}</span>
            <span>{detail}</span>


        </div>
    );
};

export default Card;