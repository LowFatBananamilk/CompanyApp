/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation, Footer, NavCarousel } from './components'
import { Main } from './pages'
import { Vison, 회사정보, 인증서현황, CEO인사말, 경영이념 } from './pages/회사소개'
import { ESG경영 } from './pages/ESG'
import { CareerInfo, QnA, 채용링크 } from './pages/인재채용'
import { 관계사 } from './pages/사업장'
import { 제조공정, 설비현황, 제품소개 } from './pages/제품'

function App() {
  return (
    <HashRouter>
      <Navigation />
      
      <NavCarousel />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/회사소개" element={<회사정보 />} />
        <Route path="/회사소개/회사정보" element={<회사정보 />} />
        <Route path="/회사소개/vison" element={<Vison />} />
        <Route path="/회사소개/인증서현황" element={<인증서현황 />} />
        <Route path="/회사소개/CEO인사말" element={<CEO인사말 />} />
        <Route path="/회사소개/경영이념" element={<경영이념 />} />

        <Route path="/esg" element={<ESG경영 />} />
        <Route path="/esg/esg경영" element={<ESG경영 />} />

        <Route path="/인재채용" element={<CareerInfo />} />
        <Route path="/인재채용/careerInfo" element={<CareerInfo />} />
        <Route path="/인재채용/Q&A" element={<QnA />} />
        <Route path="/인재채용/채용링크" element={<채용링크 />} />

        <Route path="/사업장/관계사" element={<관계사 />} />

        <Route path="/제품/제조공정" element={<제조공정 />} />
        <Route path="/제품/설비현황" element={<설비현황 />} />
        <Route path="/제품/제품소개" element={<제품소개 />} />

      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
