import React from "react";
import "./Card.css";



const Card = ({photo, heading, detail}) => {
   
    return (
        <div  className="container">
            <div className="input-container">
                <div className="input-content">
                    <div className="input-dist">
                    <div className="text">hola aca hay un texto</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;