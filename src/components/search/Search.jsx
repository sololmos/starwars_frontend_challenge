import React, { useState } from "react";
import "./Search.css"
import Button from "../button/Button";


const Search = ({cardLocation,search}) => {
    const[input, setInput]=useState("");
    const handleChange=(e)=>{
        setInput(e.target.value);
    };

    return (
   

        <div className="Search">
              <input 
              type= "text"
              name="username"
              value={input.username}
              onChange={(e)=>handleChange(e)}
              ></input>
              <Button text="Search" color={"rgba(64, 144, 181, 0.4)"} onClick={()=>search(input, cardLocation)} />
        </div>
           


        
    );
};

export default Search;