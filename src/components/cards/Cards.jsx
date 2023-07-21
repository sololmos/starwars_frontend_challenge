import React from "react";
import "./Cards.css";
import Loader from "../loader/Loader";
import Card from "../card/Card";




const Cards = () => {
   
    return (
        <div classNameName="cards" >
           
            <div className="form">
                <div className="form-title"><span>CHARACTERS</span></div>
                
                <div className="title-2"><span>BATTLE APP</span></div>
                    <Loader></Loader>

                    <div className="card-container" >

                        <div className="card-left">
                            <Card></Card>
                        </div>
                        
                        <div className="card-right">
                        <Card></Card>
                        </div>
                        
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