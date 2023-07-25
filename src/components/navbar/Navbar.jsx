import React from "react";
import "./Navbar.css"
import Search from "../search/Search";
import Random from "../random/Random";
import Button from "../button/Button";


const Navbar = ({search, random, addList}) => {
    return (
   

        <div className="navbar">
            
           
                <Search search={search} cardLocation="left"></Search>
                <Random random={random} cardLocation="left"></Random>
            
                {/* <Button text="Haz clic" color="#ff0000" size="large" onClick={handleClick} /> */}
                <Button onClick={addList} text="All characters" />
           

            
                <Search search={search} cardLocation="right"></Search>
                <Random random={random}  cardLocation="right"></Random>
            

            
           
        </div>
           


        
    );
};

export default Navbar;