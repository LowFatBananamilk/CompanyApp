import React from "react";
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import NavigationSubMenu from './NavigationSubMenu'
import './components.css'
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className=" Menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">

            <NavDropdown className="toggle2" title="HOME" >
              <NavigationSubMenu/>
            </NavDropdown>

            <NavDropdown className="toggle2" title="회사소개" >
              <NavigationSubMenu/>
            </NavDropdown>

            <NavDropdown className="toggle2" title="ESG" >
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown className="toggle2" title="인재채용" >
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown className="toggle2" title="사업장" >
              <NavigationSubMenu />
            </NavDropdown>

            <NavDropdown className="toggle2" title="제품" >
              <NavigationSubMenu />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
