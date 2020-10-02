import React, { Component } from "react";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>404 error</h2>
          <h2>Page not found!</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">{this.props.location.pathname} </span>
            was not found
          </h3>
        </div>
      </React.Fragment>
    );
  }
}
