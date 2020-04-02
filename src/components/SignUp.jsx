import React, { Component } from "react";
import FormGenrator from "./common/FormGenrator.jsx";

class SignUp extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log({ email: this.state.email, password: this.state.password });
    let dataToSubmit = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };
  };

  inputs = [
    {
      type: "text",
      name: "fname",
      label: "First Name"
    },
    {
      type: "text",
      name: "lname",
      label: "Last Name"
    },
    {
      type: "email",
      name: "email",
      label: "E-mail"
    },
    {
      type: "password",
      name: "password",
      label: "Password"
    },
    {
      type: "password",
      name: "confirm_password",
      label: "Confirm Password"
    }
  ];
  render() {
    return (
      <div className="container mt-5">
        <h1>Sign Up</h1>
        <div className="row">
          <FormGenrator
            onChange={this.onInputChange}
            onSubmit={this.onSubmit}
            inputs={this.inputs}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
