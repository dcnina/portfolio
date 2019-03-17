import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-name">
            nina de castro
        </div>
        <div className="menu-bar">
          <Link to="/photography"><div className="menu-bar-cat">photography</div></Link>
          <Link to="/video"><div className="menu-bar-cat">video</div></Link>
          <Link to="/dev"><div className="menu-bar-cat">dev</div></Link>
          <Link to="/about"><div className="menu-bar-cat">about</div></Link>
        </div>
      </div>
    );
  }
}

export default Menu;
