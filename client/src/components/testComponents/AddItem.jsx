import React from "react";
// import { Button } from "reactstrap";
// import { connect } from "react-redux";
// import { toggleLogin } from "../../redux/actions/authActions";
import API from "../../utils/API";
import Upload from "../picture/Upload"


class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemCategory: "",
      itemDescription: "",
      itemPicture: "",
      itemSku: "",
      itemCartQuantity: "",
      itemWarehouseQuantity: "",
      itemCost: "",
      itemListPrice: "",
      itemPrice: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    API.addItem(this.state);
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <Upload /> */}
        <form onSubmit={this.handleSubmit}>
        <h2>Add Item</h2>
          <input
            type="text"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
            placeholder="Item Name *"
            required
          />
          <br />
          <input
            type="text"
            name="itemCategory"
            value={this.state.itemCategory}
            onChange={this.handleChange}
            placeholder="Item Category *"
            required
          />
          <br />
          <input
            type="text"
            name="itemDescription"
            value={this.state.itemDescription}
            onChange={this.handleChange}
            placeholder="Item Description *"
            required
          />
          <br />
          {/* <Upload />
          <br /> */}

          {/* <input
            type="file"
            name="itemPicture"
            value={this.state.itemPicture}
            onChange={this.handleChange}
            placeholder="Item Picture"
          />
          <br /> */}
          <input
            type="text"
            name="itemSku"
            value={this.state.itemSku}
            onChange={this.handleChange}
            placeholder="Item Sku *"
            required
          />
          <br />
          <input
            type="number"
            name="itemCartQuantity"
            value={this.state.itemCartQuantity}
            onChange={this.handleChange}
            placeholder="Item Cart Quantity"
          />
          <br />
          <input
            type="number"
            name="itemWarehouseQuantity"
            value={this.state.itemWarehouseQuantity}
            onChange={this.handleChange}
            placeholder="Item Warehouse Quantity"
          />
          <br />
          <input
            type="number"
            name="itemCost"
            value={this.state.itemCost}
            onChange={this.handleChange}
            placeholder="Item Cost *"
            required
          />
          <br />
          <input
            type="number"
            name="itemListPrice"
            value={this.state.itemListPrice}
            onChange={this.handleChange}
            placeholder="Item List (MSRP) Price *"
            required
          />
          <br />
          <input
            type="number"
            name="itemPrice"
            value={this.state.itemPrice}
            onChange={this.handleChange}
            placeholder="Item Shelf Price *"
            required
          />
          <br />
          <p /> * Required
          <br />
          <br />
          <button type="submit">Add Item</button>
          <br />
        </form>
        <br />
      </React.Fragment>
    );
  };
};

export default AddItem