import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import backPage from "../../resources/logos/backPage.png";
import furniture from "../../resources/logos/furniture.png";
import mockData from "../../data";
import "./card.scss";
import API from "../../utils/API";

const Card = () => {
    const appItem = useSelector(state => state.app.item);
//   const [itemData, setItemData] = useState("");

  useEffect(() => {
    fetch(API.getItem(appItem));
  }, []);

  return (
    <>
      <div className="cardProductContainer">
        {appItem.map((item) => {
          return (
            <div className="flipCard">
              <div className="flip-card-inner">
                <div className="flipCard-Front">
                  <img className="furniture" src={furniture} alt="furniture" />
                </div>
                <div className="flipCard-Back">
                  <img
                    className="backPage"
                    src={backPage}
                    alt="backPage-logo"
                  />

                  <div className="productInfo">
                    <h2>{item.itemName}</h2>
                    <p>{item.itemDescription}</p>
                    <h4>{item.itemPrice}</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
