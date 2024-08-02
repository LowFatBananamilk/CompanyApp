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
  </div>
  );
}

export default 조직도;
