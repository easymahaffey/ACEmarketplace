import React from "react";
// import { Button } from "reactstrap";
// import { connect } from "react-redux";
// import { toggleLogin } from "../../redux/actions/authActions";
import API from "../../utils/API";


class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemCategory: "",
      itemPicture: "",
      itemSku: "",
      itemCartQuantity: "",
      itemWarehouseQuantity: "",
      itemCost: "",
      itemListPrice: "",
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
        <form onSubmit={this.handleSubmit}>
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
          <input
            type="number"
            name="itemCartQuantity"
            value={this.state.itemCartQuantity}
            onChange={this.handleChange}
            placeholder="Item Cart Quantity"
          />
          <input
            type="number"
            name="itemWarehouseQuantity"
            value={this.state.itemWarehouseQuantity}
            onChange={this.handleChange}
            placeholder="Item Warehouse Quantity"
          />
          <input
            type="number"
            name="itemCost"
            value={this.state.itemCost}
            onChange={this.handleChange}
            placeholder="Item Cost *"
            required
          />
          <input
            type="number"
            name="itemListPrice"
            value={this.state.itemListPrice}
            onChange={this.handleChange}
            placeholder="Item List Price *"
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