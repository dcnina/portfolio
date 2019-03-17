import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink to='/'><div className="menu-name">
            nina de castro
        </div></NavLink>
        <div className="menu-bar">
          <NavLink activeclassName="menu-bar-cat_active" to="/photography"><div  className="menu-bar-cat">photography</div></NavLink>
          <NavLink activeclassName="menu-bar-cat_active" to="/video"><div className="menu-bar-cat">video</div></NavLink>
          <NavLink activeclassName="menu-bar-cat_active" to="/dev"><div className="menu-bar-cat">dev</div></NavLink>
          <NavLink activeclassName="menu-bar-cat_active" to="/about"><div className="menu-bar-cat">about</div></NavLink>
        </div>
      </div>
    );
  }
}

export default Menu;
