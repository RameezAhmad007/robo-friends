import React, { Component } from "react";

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // console.log('Error : ', error)
    // console.log('Info : ', info)
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Oooops! SomeThing Wrong in Your Code.</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundry;
