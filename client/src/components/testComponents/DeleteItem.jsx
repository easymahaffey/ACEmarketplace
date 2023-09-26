import React from "react";
import API from "../../utils/API";


class DeleteItem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemSku: ""
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
    API.deleteItem(this.state);
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h2>Delete Item</h2>
          <input
            type="text"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
            placeholder="Item Name"
          />
          <br />
          <br />
          <button type="submit">Delete Item</button>
          <br />
        </form>
        <br />
      </React.Fragment>
    );
  };
};

export default DeleteItem