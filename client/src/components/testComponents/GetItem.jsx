import React, { useState } from "react";
import { useSelector } from "react-redux"
import API from "../../utils/API";

const GetItem = () => {
  const appItem = useSelector(state => state.app.item);
  const [itemNameInput, setItemNameInput] = useState("");
  const [itemSkuInput, setItemSkuInput] = useState("");
  const item ={
    itemName: itemNameInput,
    itemSku: itemSkuInput,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getItem(item)
    setItemNameInput("");
    setItemSkuInput("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h2>Get Item</h2>
        <input
          type="text"
          name="itemName"
          value={itemNameInput}
          onChange={(e) => setItemNameInput(e.target.value)}
          placeholder="Item Name"
        />
        <br />
        <input
          type="text"
          name="itemSku"
          value={itemSkuInput}
          onChange={(e) => setItemSkuInput(e.target.value)}
          placeholder="Item SKU"
        />
        <br />
        <br />
        <button type="submit">Get Item</button>
        <br />
      </form>
      <div className="displayItem">
        <p>{appItem.message}</p>
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Name: {appItem.data.itemName}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Iitem Category: {appItem.data.itemCategory}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item SKU: {appItem.data.itemSku}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Warehouse Quantity{appItem.data.itemWarehouseQuantity}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Cart Quantity{appItem.data.itemCartQuantity}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Cost: {appItem.data.itemCost}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Price: {appItem.data.itemPrice}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item List Price: {appItem.data.itemListPrice}</p>}
        {appItem?.data === undefined ? <p>No data available</p> : <p>Item Pictures: {appItem.data.itemPictures}</p>}
      </div>
      <br />
    </React.Fragment>
  );
};

export default GetItem
 