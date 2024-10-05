
import React from "react";
import { Col, NavDropdown, Row } from 'react-bootstrap';
import './components.css';
import './Navigation.css';
import animation from './cigif.gif';

const NavigationSubMenu = () => {
    return (
        <div>
            <Row>
                <Col className="column">
                    <NavDropdown.Item href="#"><img className="cigif" src={animation}></img></NavDropdown.Item>
                </Col>
                <Col className="column">
                    <NavDropdown.Item className="toggle" href="#/회사소개/회사정보">회사정보</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/회사소개/vison">Vision</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/회사소개/인증서현황">인증서현황</NavDropdown.Item>
                </Col>
                <Col className="column">
                    <NavDropdown.Item className="toggle" href="#/esg/ESG경영">ESG경영</NavDropdown.Item>
                </Col>
                <Col className="column">
                    <NavDropdown.Item className="toggle" href="#/인재채용/careerinfo">Career INFO</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/인재채용/Q&A">Q&A</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/인재채용/채용링크">채용링크</NavDropdown.Item>
                </Col>
                <Col className="column">
                    <NavDropdown.Item className="toggle" href="#/사업장/관계사">관계사</NavDropdown.Item>
                </Col>
                <Col className="column">
                    <NavDropdown.Item className="toggle" href="#/제품/제조공정">제조공정</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/제품/설비현황">설비현황</NavDropdown.Item>
                    <NavDropdown.Item className="toggle" href="#/제품/제품소개">제품소개</NavDropdown.Item>
                </Col>
            </Row>
        </div>
            

    );
};

export default NavigationSubMenu;
