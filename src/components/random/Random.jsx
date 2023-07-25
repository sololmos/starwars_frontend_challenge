import React from "react";
import "./Random.css";
import Button from "../button/Button";


const Random = ({random, cardLocation}) => {
    return (
   

        <div className="Random">
             <Button 
             onClick={()=>random(cardLocation)}
              text="Random" color="rgb(158, 48, 169,0.4)" 
             
              />
        </div>
           


        
    );
};

export default Random;