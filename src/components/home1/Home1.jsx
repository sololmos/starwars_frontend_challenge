import React from "react";
import "./Home1.css";
import Navbar from "../navbar/Navbar";
import Cards1 from "../cards1/Cards1";
import List from "../list/List";

const Home1 = () => {
   
    return (
        <div className="home1" >
        <Navbar></Navbar>
        <Cards1></Cards1>
        <div className="list">
        <List></List>
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