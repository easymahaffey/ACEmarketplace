import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import API from "../../utils/API";

const GetAllItems = () => {
  const appItems = useSelector((state) => state.app.items);
  const appState = useSelector((state) => state.app);
  console.log("GET ALL ITEMS APP STATE ", appState);
  const [itemNameInput, setItemNameInput] = useState("");
  const [itemSkuInput, setItemSkuInput] = useState("");
  const [itemData, setItemData] = useState("");
  const item = {
    itemName: itemNameInput,
    itemSku: itemSkuInput,
  };

  useEffect(() => {
    fetch(API.getAllItems())
  }, []);

  return (
    <React.Fragment>
      <div className="displayManyItem">
        <div className="cardProductContainer">
          {appItems.map((item) => {
            return (
              <div className="flipCard">
                <div className="flip-card-inner">
                  <div className="flipCard-Front">
                    <img
                      className="furniture"
                      // src={furniture}
                      alt="furniture"
                    />
                  </div>
                  <div className="flipCard-Back">
                    <img
                      className="backPage"
                      // src={backPage}
                      alt="backPage-logo"
                    />

                    <div className="productInfo">
                      <h2> Item Name: {item.itemName}</h2>
                      <p>Item Category: {item.itemCategory}</p>
                      <p>Item Description: {item.itemDescription}</p>
                      <p>Item SKU: {item.itemSku}</p>
                      <p>Item Cart Quantity: {item.itemCartQuantity}</p>
                      <p>
                        Item Warehouse Quantity: {item.itemWarehouseQuantity}
                      </p>
                      <p>Item Cost: {item.itemCost}</p>
                      <p>Item List (MSRP) Price: {item.itemListPrice}</p>
                      <p>Item Shelf Price: {item.itemPrice}</p>
                      <h4>{item.itemPrice}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetAllItems;
