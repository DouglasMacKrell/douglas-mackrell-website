import React from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
    return (
      <nav className="side-drawer">
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
      </nav>
    );
}

export default SideDrawer
