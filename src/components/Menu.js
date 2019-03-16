import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-name">
            nina de castro
        </div>
        <div className="menu-bar">
            <div className="menu-bar-cat">photography</div>
            <div className="menu-bar-cat">video</div>
            <div className="menu-bar-cat">dev</div>
            <div className="menu-bar-cat">about</div>
        </div>
      </div>
    );
  }
}

export default Menu;
