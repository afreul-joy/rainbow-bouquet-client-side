import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import brand from "../../../Images/Header/brand.png";
import "./Header.css";
import "../Header/Search/Search.css";

const Header = () => {
  return (
    <>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width="80px" height="80px" src={brand} alt="logo" /> 
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
          Rainbow Bouquet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="navmenu">
                <NavLink
                  to="/"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/user"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                 <i className="fa fa-user-o fa-1x"></i>
                </NavLink>

                <NavLink
                  to="/love"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                 <i className="fa fa-heart-o fa-1x"></i>
                </NavLink>



                <NavLink
                  to="/review"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                 <i className="fa fa-star-o fa-1x"></i>
                </NavLink>

                <NavLink
                  to="/cart"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                 <i className="fa fa-shopping-cart fa-1x"></i>
                </NavLink>

              </div>

              <div className="search-section">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="  Search Item"
                />
                <button className="search-btn">
                  <i className="search-logo fa fa-search fa-2x"></i>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
