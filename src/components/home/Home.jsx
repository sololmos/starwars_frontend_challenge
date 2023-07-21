import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Cards from "../cards/Cards";
import List from "../list/List";

const Home = () => {
   
    return (
        <div className="home" >
        <Navbar></Navbar>
        <Cards></Cards>
        
        <List></List>
        
        
       
        </div>
    );
};

export default Home;

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