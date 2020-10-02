import React from "react";
import { TogglebuttonContainer } from "./Styles";

const DrawerToggle = (props) => (
  <TogglebuttonContainer>
    <button id="togglebtn" className="toggle-button" onClick={props.clickEvent}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  </TogglebuttonContainer>
);

export default DrawerToggle;
