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
        <div>
          <NavLink to="/">
            <div className="menu-name">nina de castro</div>
          </NavLink>
        </div>

        <div className={"menu-bar" + (this.state.open ? ' open' : '')}>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/">
            <div className="menu-bar-cat">works</div>
          </NavLink>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/about">
            <div className="menu-bar-cat">about</div>
          </NavLink>
          <a href="mailto: dcninaa@gmail.com">
            <div className="menu-bar-cat">contact</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
