import React from "react";
import { SidebarContainer } from "./Styles";

function SideBar(props) {
  let drawerClasses = "side-drawer";

  if (props.showSideBar) {
    drawerClasses = "side-drawer open ";
  }

  return (
    <SidebarContainer id="hide-sidebar">
      <nav className={drawerClasses}>
        <button className="close-btn" id="close-btn">
          <i className="fas fa-times" onClick={() => props.clickEvent()}></i>
        </button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}

export default SideBar;
