import React, {useState, useEffect} from "react";
import backPage from "../../resources/logos/backPage.png";
import furniture from "../../resources/logos/furniture.png";
import './card.scss'

const Card = ({}) => {

    return(
        <>
       <div className = "cardProductContainer">
        <div className="flipCard">
            <div className="flip-card-inner">
                <div className="flipCard-Front">
                <img id="furniture" src={furniture} alt="furniture"/>
                </div>
                <div className="flipCard-Back">       
                <img className="backPage"src={backPage} alt="backPage-logo"/>
                <div className="productInfo">   
                   <h2>name</h2>
                    <p >description</p>
                    <h4 >$price</h4>

                </div>     
                   
                </div>
            </div>
        </div>
    )
}

export default Card;