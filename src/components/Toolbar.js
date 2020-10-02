import React from "react";
import DrawerToggle from "./DrawerToggle";
import { ToolbarContainer } from "./Styles";

function Toolbar(props) {
  return (
    <ToolbarContainer>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggle clickEvent={props.sideBarToggleHandler} />
          </div>
          <div className="toolbar__logo">
            <a href="/">Makobar</a>
          </div>
          <div className="spacer"></div>
          <div className="toolbar__navigation-items">
            <ul className="hide-links">
              <li className="hide-link">
                <a href="/">Home</a>
              </li>
              <li className="hide-link">
                <a href="/about">About</a>
              </li>
              <li className="hide-link">
                <a href="/contacts">Contacts</a>
              </li>
              <li className="hide-link">
                <a href="/">Links</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </ToolbarContainer>
  );
}

export default Toolbar;
