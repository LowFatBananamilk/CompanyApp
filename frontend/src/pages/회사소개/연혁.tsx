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
  </div>
  );
}

export default 연혁;
