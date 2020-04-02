import React, { Component } from "react";
import FormGenrator from "./common/FormGenrator.jsx";
import { connect } from "react-redux";
import {onInputChange, onSubmit} from '../actions';

export class Login extends Component {
  state = {
    email: "",
    password: ""
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
    // let dataToSubmit = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
  };

  inputs = [
    {
      type: "email",
      name: "email",
      label: "E-mail"
    },
    {
      type: "password",
      name: "password",
      label: "Password"
    }
  ];

  render() {
    // console.log('hellow')
    return (
      <div className="container mt-5">
        <h1>Log In</h1>
        <div className="row">
          <FormGenrator
            onChange={this.props.onInputChange}
            onSubmit={this.props.onSubmit}
            inputs={this.inputs}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (props) =>{
  return{
    email:props.email,
    password:props.password,
    submit_data: props.submit_data,
  }
}

export default connect(mapStateToProps, {onInputChange, onSubmit})(Login);
