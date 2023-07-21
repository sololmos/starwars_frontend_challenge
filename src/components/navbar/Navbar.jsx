import React from "react";
import "./Navbar.css"
import Search from "../search/Search";
import Random from "../random/Random";
import Button from "../button/Button";


const Navbar = () => {
    return (
   

        <div className="navbar">
            
           
                <Search></Search>
                <Random></Random>
            
                {/* <Button text="Haz clic" color="#ff0000" size="large" onClick={handleClick} /> */}
                <Button text="All characters" />
           

            
                <Search></Search>
                <Random></Random>
            

            
           
        </div>
           


        
    );
};

export default Navbar;