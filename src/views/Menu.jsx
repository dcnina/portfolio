import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TopContact from "../components/TopContact";

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

  scrollToTop() {
    window.scrollTo(0, 0);
  }


  render() {
    return (
      <div className="menu">
        <TopContact />
        <div>
          <NavLink onClick={this.scrollToTop} to="/">
            <div className="menu-name">nina de castro</div>
          </NavLink>
        </div>

        <div className={"menu-bar" + (this.state.open ? ' open' : '')}>
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.scrollToTop}
            to="/">
            <div className="menu-bar-cat">works</div>
          </NavLink>
          {/* <a href="mailto: dcninaa@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="menu-bar-cat">video</div>
          </a> */}
          <NavLink
            activeclassname="menu-bar-cat_active"
            onClick={this.toggleMenu}
            to="/photo">
            <div className="menu-bar-cat">photo</div>
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
