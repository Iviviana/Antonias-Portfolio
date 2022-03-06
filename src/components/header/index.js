import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header className="border d-flex align-items-center justify-content-center">
        <div>
          <Link to="/">
            <h1>Antonia Garcia</h1>
          </Link>
  
          <div className="border d-flex align-items-center">
            <Nav className="text-center">
              <Link to="/">About Me</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/resume">Resume</Link>
            </Nav>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;