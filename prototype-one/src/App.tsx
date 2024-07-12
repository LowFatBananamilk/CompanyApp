/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './components'
import { Main } from './pages'
import { ESG경영, ESG평가, 사회공헌, 정도경영, 지배구조, 탄소중립, 품질경영, 환경안전보건경영 } from './pages/ESG'
import { 금형제작설비현황, 사출설비현황, 생산라인구성도, 시험장비현황 } from './pages/공장및설비현황'
import { 서진티앤에이주, 주신진엔지니어링 } from './pages/관계사현황'
import { SQS시스템, 금형제작유지보수, 사출성형공정FProof, 사출성형공정원재료, 인증서특허, 조립공정이종방지, 주요생산품목 } from './pages/사업영역'
import { CareerInfo, HRsystem, Talent } from './pages/인재채용'
import { Vison, 경영목표, 경영방침, 매출현황, 연혁, 조직도, 회사소개 } from './pages/회사소개'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/회사소개" element={<회사소개 />}/>
        <Route path="/회사소개/회사소개" element={<회사소개 />}/>
        <Route path="/회사소개/연혁" element={<연혁 />}/>
        <Route path="/회사소개/vison" element={<Vison />}/>
        <Route path="/회사소개/조직도" element={<조직도 />}/>
        <Route path="/회사소개/경영방침" element={<경영방침 />}/>
        <Route path="/회사소개/경영목표" element={<경영목표 />}/>
        <Route path="/회사소개/매출현황" element={<매출현황 />}/>

        <Route path="/사업영역" element={<주요생산품목 />}/>
        <Route path="/사업영역/주요생산품목" element={<주요생산품목 />}/>
        <Route path="/사업영역/sqs시스템" element={<SQS시스템 />}/>
        <Route path="/사업영역/사출성형공정원재료" element={<사출성형공정원재료 />}/>
        <Route path="/사업영역/사출성형공정fproof" element={<사출성형공정FProof />}/>
        <Route path="/사업영역/조립공정이종방지" element={<조립공정이종방지 />}/>
        <Route path="/사업영역/금형제작유지보수" element={<금형제작유지보수 />}/>
        <Route path="/사업영역/인증서특허" element={<인증서특허 />}/>

        <Route path="/공장및설비현황" element={<사출설비현황 />}/>
        <Route path="/공장및설비현황/사출설비현황" element={<사출설비현황 />}/>
        <Route path="/공장및설비현황/금형제작설비현황" element={<금형제작설비현황 />}/>
        <Route path="/공장및설비현황/시험장비현황" element={<시험장비현황 />}/>
        <Route path="/공장및설비현황/생산라인구성도" element={<생산라인구성도 />}/>

        <Route path="/관계사현황" element={<주신진엔지니어링 />}/>
        <Route path="/관계사현황/주신진엔지니어링" element={<주신진엔지니어링 />}/>
        <Route path="/관계사현황/서진티앤에이주" element={<서진티앤에이주 />}/>

        <Route path="/esg" element={<ESG경영 />}/>
        <Route path="/esg/esg경영" element={<ESG경영 />}/>
        <Route path="/esg/탄소중립" element={<탄소중립 />}/>
        <Route path="/esg/정도경영" element={<정도경영 />}/>
        <Route path="/esg/품질경영" element={<품질경영 />}/>
        <Route path="/esg/환경안전보건경영" element={<환경안전보건경영 />}/>
        <Route path="/esg/지배구조" element={<지배구조 />}/>
        <Route path="/esg/esg평가" element={<ESG평가 />}/>
        <Route path="/esg/사회공헌" element={<사회공헌 />}/>

        <Route path="/인재채용" element={<Talent />}/>
        <Route path="/인재채용/talent" element={<Talent />}/>
        <Route path="/인재채용/hrsystem" element={<HRsystem />}/>
        <Route path="/인재채용/careerInfo" element={<CareerInfo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
