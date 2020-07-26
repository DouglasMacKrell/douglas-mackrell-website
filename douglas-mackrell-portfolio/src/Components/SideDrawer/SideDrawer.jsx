import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = "side-drawer";

    if(props.show) {
        drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default SideDrawer
