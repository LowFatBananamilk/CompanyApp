import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, NavDropdown, Row } from 'react-bootstrap'

import './components.css'

const NavigationSubMenu = () => {
    return (
        <>
            <Row>
                <Col>
                    <NavDropdown.Item href="#/회사소개/회사정보">회사정보</NavDropdown.Item>
                    <NavDropdown.Item href="#/회사소개/vison">Vision</NavDropdown.Item>
                    <NavDropdown.Item href="#/회사소개/인증서현황">인증서현황</NavDropdown.Item>
                </Col>
                <Col>
                    <NavDropdown.Item href="#/esg/ESG경영">ESG경영</NavDropdown.Item>
                </Col>
                <Col>
                    <NavDropdown.Item href="#/인재채용/careerinfo">Career INFO</NavDropdown.Item>
                    <NavDropdown.Item href="#/인재채용/Q&A">Q&A</NavDropdown.Item>
                    <NavDropdown.Item href="#/인재채용/채용링크">채용링크</NavDropdown.Item>
                </Col>
                <Col>
                    <NavDropdown.Item href="#/사업장/관계사">관계사</NavDropdown.Item>
                </Col>
                <Col>
                    <NavDropdown.Item href="#/제품/제조공정">제조공정</NavDropdown.Item>
                    <NavDropdown.Item href="#/제품/설비현황">설비현황</NavDropdown.Item>
                    <NavDropdown.Item href="#/제품/제품소개">제품소개</NavDropdown.Item>
                </Col>
            </Row>
        </>
    );
};

export default NavigationSubMenu;
