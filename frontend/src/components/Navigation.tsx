import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import './components.css'
 
const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">  
                  <NavDropdown title="회사소개" id="intro-dropdown">
                    <NavDropdown.Item href="#/회사소개/회사소개">회사소개</NavDropdown.Item>
                    <NavDropdown.Item href="#/회사소개/vison">Vision</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ESG" id="intro-dropdown">
                    <NavDropdown.Item href="#/esg/ESG경영">ESG경영</NavDropdown.Item>
                  </NavDropdown>
             
                  <NavDropdown title="인재채용" id="intro-dropdown">
                    <NavDropdown.Item href="#/인재채용/careerinfo">Career INFO</NavDropdown.Item>
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </>
    );
};
 
export default Navigation;
