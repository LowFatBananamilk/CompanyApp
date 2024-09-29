import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import NavigationSubMenu from './NavigationSubMenu'

import './components.css'

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown title="회사소개" id="intro-dropdown">
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown title="ESG" id="intro-dropdown">
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown title="인재채용" id="intro-dropdown">
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown title="사업장" id="intro-dropdown">
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown title="제품" id="intro-dropdown">
              <NavigationSubMenu />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
