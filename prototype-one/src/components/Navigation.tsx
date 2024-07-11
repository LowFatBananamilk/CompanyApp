import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
 
const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">  
                  <NavDropdown title="회사소개" id="intro-dropdown">
                    <NavDropdown.Item>회사소개</NavDropdown.Item>
                    <NavDropdown.Item>연혁</NavDropdown.Item>
                    <NavDropdown.Item>Vision</NavDropdown.Item>
                    <NavDropdown.Item>조직도</NavDropdown.Item>
                    <NavDropdown.Item>경영방침</NavDropdown.Item>
                    <NavDropdown.Item>경영목표</NavDropdown.Item>
                    <NavDropdown.Item>매출현황</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="사업 영역" id="intro-dropdown">
                    <NavDropdown.Item>주요생산품목</NavDropdown.Item>
                    <NavDropdown.Item>SQS 시스템</NavDropdown.Item>
                    <NavDropdown.Item>사출성형공정(원재료)</NavDropdown.Item>
                    <NavDropdown.Item>사출성형공정(F/Proof)</NavDropdown.Item>
                    <NavDropdown.Item>조립공정(이종방지)</NavDropdown.Item>
                    <NavDropdown.Item>금형제작/유지보수</NavDropdown.Item>
                    <NavDropdown.Item>인증서/특허</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="공장 및 설비현황" id="intro-dropdown">
                    <NavDropdown.Item>사출설비현황</NavDropdown.Item>
                    <NavDropdown.Item>금형제작 설비현황</NavDropdown.Item>
                    <NavDropdown.Item>시험장비현황</NavDropdown.Item>
                    <NavDropdown.Item>생산라인 구성도</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="관계사현황" id="intro-dropdown">
                    <NavDropdown.Item>(주)신진엔지니어링</NavDropdown.Item>
                    <NavDropdown.Item>서진티앤에이(주)</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ESG" id="intro-dropdown">
                    <NavDropdown.Item>ESG경영</NavDropdown.Item>
                    <NavDropdown.Item>탄소중립</NavDropdown.Item>
                    <NavDropdown.Item>정도경영</NavDropdown.Item>
                    <NavDropdown.Item>품질경영</NavDropdown.Item>
                    <NavDropdown.Item>환경안전보건경영</NavDropdown.Item>
                    <NavDropdown.Item>지배구조</NavDropdown.Item>
                    <NavDropdown.Item>ESG평가</NavDropdown.Item>
                    <NavDropdown.Item>사회공헌</NavDropdown.Item>
                  </NavDropdown>
             
                  <NavDropdown title="인재채용" id="intro-dropdown">
                    <NavDropdown.Item>Talent</NavDropdown.Item>
                    <NavDropdown.Item>HR System</NavDropdown.Item>
                    <NavDropdown.Item>Career INFO</NavDropdown.Item>
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </>
    );
};
 
export default Navigation;