import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div className="menu">
        <NavLink to="/">
          <div className="menu-name">nina de castro</div>
        </NavLink>

        <div
          className="menu-button"
          onClick={this.toggleMenu}>
        </div>

        <div className={"menu-bar" + (this.state.open ? ' open' : '')}>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/photography">
            <div className="menu-bar-cat">photography</div>
          </NavLink>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/video">
            <div className="menu-bar-cat">video</div>
          </NavLink>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/dev">
            <div className="menu-bar-cat">dev</div>
          </NavLink>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/about">
            <div className="menu-bar-cat">about</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Menu;
