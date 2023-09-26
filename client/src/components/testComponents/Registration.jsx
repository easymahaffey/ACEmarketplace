import React from "react";
// import { Button } from "reactstrap";
// import { connect } from "react-redux";
// import { toggleLogin } from "../../redux/actions/authActions";
import API from "../../utils/API";


class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  validatePassword(e) {
    e.preventDefault();
    let testPassword = /\d+[!@#$%^&*()]+/g;
    this.state.password1.length < 6
      ? alert(
          "PASSWORD NEEDS TO BE AT LEAST 6 CHARACTERS ALONG WITH ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        )
      : testPassword.test(this.state.password1)
      ? this.handleSubmit()
      : alert(
          "PASSWORD NEEDS ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        );
  }

  handleSubmit() {
    API.register(this.state);
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="login_modal" onSubmit={this.validatePassword}>
        <h2>Register User</h2>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name *"
            required
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name *"
            required
          />
          <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email *"
            required
          />
          <br />
          <input
            type="text"
            name="password1"
            value={this.state.password1}
            onChange={this.handleChange}
            placeholder="Password *"
            required
          />
          <br />
          <input
            type="text"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            placeholder="Confirm password *"
            required
          />
          <br />
          <p /> * Required
          <br />
          <br />
          <button type="submit">Register</button>
          <br />
          {/* <Button onClick={this.props.toggleLogin}>Login</Button> */}
        </form>
        <br />
      </React.Fragment>
    );
  };
};

export default Registration