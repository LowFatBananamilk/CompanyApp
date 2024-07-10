import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Carousel} from 'react-bootstrap'
import './Landing.css'; 
import { Link } from "react-router-dom";

function Landing() {
    return (
      <div>
          <h1 style={{textAlign: "center"}}>HANJIN PL</h1>
          <img src="/logo.png" href="#home"/>
          <Navbar expand="lg" className="custom-navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">  
                  <NavDropdown title="회사소개" id="intro-dropdown" href="#intro">
                    <NavDropdown.Item href="#intro">회사소개</NavDropdown.Item>
                    <NavDropdown.Item href="#A1">연혁</NavDropdown.Item>
                    <NavDropdown.Item href="#A2">Vision</NavDropdown.Item>
                    <NavDropdown.Item href="#A3">조직도</NavDropdown.Item>
                    <NavDropdown.Item href="#A4">경영방침</NavDropdown.Item>
                    <NavDropdown.Item href="#A5">경영목표</NavDropdown.Item>
                    <NavDropdown.Item href="#A6">매출현황</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="사업 영역" id="intro-dropdown" href="#bus">
                    <NavDropdown.Item href="#bus">주요생산품목</NavDropdown.Item>
                    <NavDropdown.Item href="#B1">SQS 시스템</NavDropdown.Item>
                    <NavDropdown.Item href="#B2">사출성형공정(원재료)</NavDropdown.Item>
                    <NavDropdown.Item href="#B3">사출성형공정(F/Proof)</NavDropdown.Item>
                    <NavDropdown.Item href="#B4">조립공정(이종방지)</NavDropdown.Item>
                    <NavDropdown.Item href="#B5">금형제작/유지보수</NavDropdown.Item>
                    <NavDropdown.Item href="#B6">인증서/특허</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="공장 및 설비현황" id="intro-dropdown" href="#fact">
                    <NavDropdown.Item href="#fact">사출설비현황</NavDropdown.Item>
                    <NavDropdown.Item href="#C1">금형제작 설비현황</NavDropdown.Item>
                    <NavDropdown.Item href="#C2">시험장비현황</NavDropdown.Item>
                    <NavDropdown.Item href="#C3">생산라인 구성도</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="관계사현황" id="intro-dropdown" href="#link">
                    <NavDropdown.Item href="#link">(주)신진엔지니어링</NavDropdown.Item>
                    <NavDropdown.Item href="#D1">서진티앤에이(주)</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ESG" id="intro-dropdown" href="#esg">
                    <NavDropdown.Item href="#esg">ESG경영</NavDropdown.Item>
                    <NavDropdown.Item href="#E1">탄소중립</NavDropdown.Item>
                    <NavDropdown.Item href="#E2">정도경영</NavDropdown.Item>
                    <NavDropdown.Item href="#E3">품질경영</NavDropdown.Item>
                    <NavDropdown.Item href="#E4">환경안전보건경영</NavDropdown.Item>
                    <NavDropdown.Item href="#E5">지배구조</NavDropdown.Item>
                    <NavDropdown.Item href="#E6">ESG평가</NavDropdown.Item>
                    <NavDropdown.Item href="#E7">사회공헌</NavDropdown.Item>
                  </NavDropdown>
             
                  <NavDropdown title="인재채용" id="intro-dropdown" href="#rec">
                    <NavDropdown.Item href="#rec">Talent</NavDropdown.Item>
                    <NavDropdown.Item href="#F1">HR System</NavDropdown.Item>
                    <NavDropdown.Item href="#F1">Career INFO</NavDropdown.Item>
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
          </Navbar>
          
          <Carousel>
              <Carousel.Item>
                <img src="/slide1.png" text="First slide" href="#home" />
                <Carousel.Caption>
                  <h3>HANJIN PL</h3>
                  <p>Total Automotive Interior Company</p>
                  <p>자동차 내장재 생산 전문 업체</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide2.png" text="First slide" href="#intro" />
              <Carousel.Caption>
                  <h3>회사소개</h3>
                  <p>회사 소개, Vision, 경영 방침, 경영 목표, etc.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide1.png" text="First slide" href="#bus" />
              <Carousel.Caption>
                  <h3>사업영역</h3>
                  <p>
                    주요 생산 품목, 인증서, 특허, 개발현황, etc.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide2.png" text="First slide" href="#fact" />
              <Carousel.Caption>
                  <h3>공장 및 설비현황</h3>
                  <p>
                    사출 설비, 금형 제작, 생산라인 구성도, etc.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide1.png" text="First slide" href="#link" />
              <Carousel.Caption>
                  <h3>관계사현황</h3>
                  <p>
                    (주)신진엔지니어링, 서진티앤에이(주)
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide2.png" text="First slide" href="#esg" />
              <Carousel.Caption>
                  <h3>ESG</h3>
                  <p>
                    사출 설비, 금형 제작, 생산라인 구성도, etc.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="/slide2.png" text="First slide" href="#rec"/>
              <Carousel.Caption>
                  <h3>인재채용</h3>
                  <p>
                    Talent, HR System, Career INFO
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>
      );
}

export default Landing;