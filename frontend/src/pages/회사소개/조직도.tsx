import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import '../divs.css'
import logo from '../logo.png'
import 조직도사진 from './조직도사진.png'



function 조직도() {
  return (
  <div>
    <div>
    <h1 className='header1'>조직도</h1>
    <div className='start'></div>
    </div>

    <div className='main bg2'>
      <img src={조직도사진} className='imgfull'></img>
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

export default 조직도;
