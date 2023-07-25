import React, { useState } from "react";
import "./Home1.css";
import Navbar from "../navbar/Navbar";
import Cards1 from "../cards1/Cards1";
import List from "../list/List";



const Home1 = ({getAllCharacters}) => {

    const[chars, SetChars]=useState({
        cardLeft:{},
        cardRight:{}
    });

    const[listC, setListC]=useState([]);

    const search=function(name,cardLocation){
        const findCharacter= getAllCharacters.find((c)=>c.name === name);
        if(cardLocation === "left"){
            SetChars({...chars, cardLeft:findCharacter});
        };
        if(cardLocation === "right"){
            SetChars({...chars, cardRight:findCharacter});
        };

    };
    const addList=function(){
        if(listC.length === 0){
            setListC(getAllCharacters);

        } else{
            setListC([]);
        }

    };
    const random=function(cardLocation){
        function getNumRandom(max){
            return Math.floor(Math.random()*max)
        };
        const idRandom= getNumRandom(87) + 1;
        const findCharacter= getAllCharacters.find((c)=>c.id === idRandom);
        if(cardLocation === "left"){
            SetChars({...chars, cardLeft:findCharacter});
        };
        if(cardLocation === "right"){
            SetChars({...chars, cardRight:findCharacter});
        };

    };

   //console.log(getAllCharacters)

    return (
        <div className="home1" >
        <Navbar search={search} addList={addList} random={random}></Navbar>
        <Cards1 characters={chars}></Cards1>
        <div className="list">
        <List lista={listC}></List>
        </div>
        
       
        </div>
    );
};

export default Home1;

// const Home = () => {
   
//     return (
//         <div className="home" >
//         <Navbar></Navbar>
//         <Cards></Cards>
//         <List></List>
       
//         </div>
//     );
// };

// export default Home;