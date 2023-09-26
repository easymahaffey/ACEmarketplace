import React, {useState, useEffect} from "react";
import backPage from "../../resources/logos/backPage.png";
import furniture from "../../resources/logos/furniture.png";
import mockData from '../../data'
import './card.scss'

const Card = ({}) => {

    return(
        <>

        <div className = "cardProductContainer">
        {mockData.map((item) => {  
            return( 
        <div className="flipCard">
        
        
        
                    <div className="flip-card-inner">
        
                        <div className="flipCard-Front">
        
                        <img className="furniture" src={furniture} alt="furniture"/>
                        
                        </div>
                        <div className="flipCard-Back">      
                        <img className="backPage"src={backPage} alt="backPage-logo"/>
           
                        <div className="productInfo">  
                           <h2>{item.itemName}</h2>
                            <p >{item.itemDescription}</p>
                            <h4 >{item.itemPrice}</h4>
        
        
                        </div>    
                           
                        </div>
                    </div>
                
                </div>)})}
                
        
        
                </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
        )
}

export default Card;