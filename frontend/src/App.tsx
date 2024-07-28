/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './components'
import { Main } from './pages'
import { ESG경영 } from './pages/ESG'
import { CareerInfo } from './pages/인재채용'
import { 주신진엔지니어링 } from './pages/관계사현황'
import {} from './pages/회사소개'

function App() {
  return (
    <HashRouter>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/회사소개" element={<회사소개 />}/>
        <Route path="/회사소개/회사소개" element={<회사소개 />}/>
        <Route path="/회사소개/vison" element={<Vison />}/>



        <Route path="/관계사현황" element={<주신진엔지니어링 />}/>
        <Route path="/관계사현황/주신진엔지니어링" element={<주신진엔지니어링 />}/>
        <Route path="/관계사현황/서진티앤에이주" element={<서진티앤에이주 />}/>

        <Route path="/esg" element={<ESG경영 />}/>
        <Route path="/esg/esg경영" element={<ESG경영 />}/>


        <Route path="/인재채용" element={<CareerInfo />}/>
        <Route path="/인재채용/careerInfo" element={<CareerInfo />}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
