import React, { Component } from "react";

import Toolbar from "./Toolbar";
import SideBar from "./SideBar";
import BackDrop from "./BackDrop";

class Application extends Component {
  state = {
    sideBarOpen: false,
  };

  sideBarToggleHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideBarOpen) {
      backDrop = <BackDrop clickEvent={this.backDropClickHandler} />;
    }
    return (
      <div className="app">
        <Toolbar sideBarToggleHandler={this.sideBarToggleHandler} />
        <SideBar
          showSideBar={this.state.sideBarOpen}
          clickEvent={this.backDropClickHandler}
        />
        {backDrop}
      </div>
    );
  }
}

export default Application;
