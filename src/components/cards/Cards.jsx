import React from "react";
import "./Cards.css";
import Loader from "../loader/Loader";



const Cards = () => {
   
    return (
        <div classNameName="cards" >
           
            <div className="form">
                <div className="form-title"><span>CHARACTERS</span></div>
                
                <div className="title-2"><span>BATTLE APP</span></div>
                <div >
                    <Loader></Loader>
                </div>
                    <section className="bg-stars">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </section>

                
                
            </div>

        </div>
    );
};

export default Cards;