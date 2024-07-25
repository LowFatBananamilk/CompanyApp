import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import '../divs.css'
import 연혁사진 from './연혁사진.png'
import logo from '../logo.png'

function 연혁() {
  return (
  <div>
    <div>
    <h1 className='header1'>연혁</h1>
    <div className='start'></div>
    </div>

    <div className='main'>
      <img src={연혁사진} className='imgfull'></img>
    </div>

    <div className="footer">
        <img src={logo} className='logo'></img>
        <h6 className='grey'>[본사] 경북 경주시 외동읍 제내2공단길 94 한진피엘 ㈜ | Tel 031-420-3200 | Fax 031-420-3120
        </h6>
        <h6 className='grey'>COPYRIGHT © 2021 <span className='white'>HANJIN PL.</span> ALL RIGHT RESERVED.
        </h6>
      </div>
  </div>
  );
}

export default 연혁;
