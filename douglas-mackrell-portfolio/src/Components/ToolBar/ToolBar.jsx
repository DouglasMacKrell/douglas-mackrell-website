import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import "./ToolBar.css";

const ToolBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.handleDrawerToggleClick} />
        </div>
        <div className="toolbar__logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_nav-items">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Links</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default ToolBar