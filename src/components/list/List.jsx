import React from "react";
import "./List.css";



const List = ({lista}) => {
   
    return (
        <div className="list" >
            {lista.length > 0 ?  lista.map((c)=>{
                return  <h5 key={c.id}>{c.name }</h5>
            }) : null }
           
        </div>
    );
};

export default List;