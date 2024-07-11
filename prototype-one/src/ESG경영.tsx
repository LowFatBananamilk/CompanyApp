import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Carousel} from 'react-bootstrap'
import './ESG경영.css'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import leaficon from './leaf icon.svg';

function ESG() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>HANJIN PL</h1>
        <img src="/logo.png"/>
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
      
      <hr></hr>
      <h1 className="header">ESG 경영</h1>
      <br></br>
      <div className="explanation">
        <h3 className='det'>급변하는 경영환경 속에서 존경받는 글로벌 기업으로서</h3>
        <h3>모든 이해관계자들로부터 <span id='imp'>신뢰</span>를 확보하고 기업의 가치 변화와 니즈를 충족시키기 위하여</h3>
        <h3 id='imp'>환경(Environment)</h3>
        <h3 id='imp'>사회(Society)</h3>
        <h3 id='imp'>지배구조(Governance)</h3>
        <h3>각 영역별로 아래와 같이 변화와 확신을 추구하겠습니다.</h3>
      </div>

      <div className='ESGicons'>
        <div className='Card'>
          
          <h4>친환경 중심의 경영 혁신</h4>
          <img src={leaficon} className="App-logo" alt="leaf"/>
          <ul>
            <li id='listleft'>인권 및 다양성 존중</li>
            <li id='listleft'>안전 및 보건</li>
          </ul>
        </div>
        <div className='Card'>
          <h4>사회를 위한 책임 경영 내재화</h4>
          <ul>
            <li id='listleft'>인권 및 다양성 존중</li>
            <li id='listleft'>안전 및 보건</li>
          </ul>
        </div>
        <div className='Card'>
          <h4>투명성과 효율성 제고</h4>
          <ul>
            <li id='listleft'>감사의 독립성과 역할</li>
            <li id='listleft'>지속가능성</li>
            <li id='listleft'>전사 리스크 관리</li>
          </ul>
        </div>
      </div>  

      <div>
        
      </div>




    </div>

      );
    }
export default ESG;

