import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="/">
            <h1>Antonia Garcia</h1>
          </Link>
  
          <nav className="text-center">
            <Link to="/">About Me</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;