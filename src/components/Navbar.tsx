import React, { Component } from "react";
import { Link } from "react-router-dom";
//STYLES
import { SidebarWrapper, NavLink } from "../utils/styled-components";

class Header extends Component {
  render() {
    return (
      <SidebarWrapper>
        <NavLink>
          <Link to="/" className="Navbar-text">
            Home
          </Link>
          <Link to="/Home/AboutMe" className="Navbar-text">
            About Me
          </Link>
          <Link to="/Home/MyProjects" className="Navbar-text">
            My Projects
          </Link>
          <Link to="/Home/ContactMe" className="Navbar-text">
            Contact Me
          </Link>
        </NavLink>
      </SidebarWrapper>
    );
  }
}

export default Header;
