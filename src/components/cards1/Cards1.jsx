import React from "react";
import "./Cards1.css";

import Card1 from "../card1/Card1";
//import Button from "../button/Button";




const Cards1 = ({characters}) => {
    const left= characters.cardLeft.name ?  characters.cardLeft : null
    const right= characters.cardRight.name ?  characters.cardRight : null
   
    return (
        <div className="cards" >
                  <Card1
                    character={left}           
                    image=""
                    name="name"
                    id="id"
                    homeworld="homeworld"
                    species= ""
                    height= ""
                    mass= ""
                    gender= ""
                    styles={{ backgroundColor: 'lightgreen', color: 'black' }}

                    // button1={true }
                    // text1="Search" 
                    // color1={"rgba(64, 144, 181, 0.4)"}
                    
                    // button2={true }
                    // text2="Random" 
                    // color2={"rgb(158, 48, 169)"}
                    


                    

                   />

                    <Card1
                    character={right}
                    image=""
                    name="name"
                    id="id"
                    homeworld="homeworld"
                    species= ""
                    height= ""
                    mass= ""
                    gender= ""
                    styles={{ backgroundColor: 'lightblue', color: 'black' }}
                   />
            
                
                
                   
                
           
            

        </div>
    );
};

export default Cards1;