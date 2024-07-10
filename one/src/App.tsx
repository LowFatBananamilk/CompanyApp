import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import ESG from './pages/ESG';
import Hire from './pages/Hire';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={Hire}></Route>
          <Route path='/hire' element={Hire}></Route>
          <Route path='/esg' element={ESG}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;