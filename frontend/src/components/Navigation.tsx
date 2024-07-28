import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

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
              <NavDropdown.Item href="#/회사소개/연혁">연혁</NavDropdown.Item>
              <NavDropdown.Item href="#/회사소개/vison">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#/회사소개/조직도">조직도</NavDropdown.Item>
              <NavDropdown.Item href="#/회사소개/경영방침">경영방침</NavDropdown.Item>
              <NavDropdown.Item href="#/회사소개/경영목표">경영목표</NavDropdown.Item>
              <NavDropdown.Item href="#/회사소개/매출현황">매출현황</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="사업 영역" id="intro-dropdown">
              <NavDropdown.Item href="#/사업영역/주요생산품목">주요생산품목</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/sqs시스템">SQS 시스템</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/사출성형공정원재료">사출성형공정(원재료)</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/사출성형공정fproof">사출성형공정(F/Proof)</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/조립공정이종방지">조립공정(이종방지)</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/금형제작유지보수">금형제작/유지보수</NavDropdown.Item>
              <NavDropdown.Item href="#/사업영역/인증서특허">인증서/특허</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="공장 및 설비현황" id="intro-dropdown">
              <NavDropdown.Item href="#/공장및설비현황/사출설비현황">사출설비현황</NavDropdown.Item>
              <NavDropdown.Item href="#/공장및설비현황/금형제작설비현황">금형제작 설비현황</NavDropdown.Item>
              <NavDropdown.Item href="#/공장및설비현황/시험장비현황">시험장비현황</NavDropdown.Item>
              <NavDropdown.Item href="#/공장및설비현황/생산라인구성도">생산라인 구성도</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="관계사현황" id="intro-dropdown">
              <NavDropdown.Item href="#/관계사현황/주신진엔지니어링">(주)신진엔지니어링</NavDropdown.Item>
              <NavDropdown.Item href="#/관계사현황/서진티앤에이주">서진티앤에이(주)</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ESG" id="intro-dropdown">
              <NavDropdown.Item href="#/esg/ESG경영">ESG경영</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/탄소중립">탄소중립</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/정도경영">정도경영</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/품질경영">품질경영</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/환경안전보건경영">환경안전보건경영</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/지배구조">지배구조</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/ESG평가">ESG평가</NavDropdown.Item>
              <NavDropdown.Item href="#/esg/사회공헌">사회공헌</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="인재채용" id="intro-dropdown">
              <NavDropdown.Item href="#/인재채용/talent">Talent</NavDropdown.Item>
              <NavDropdown.Item href="#/인재채용/hrsystem">HR System</NavDropdown.Item>
              <NavDropdown.Item href="#/인재채용/careerinfo">Career INFO</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
