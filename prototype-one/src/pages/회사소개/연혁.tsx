import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import './연혁.css'
import 연혁사진 from '../../연혁사진.png';

function 연혁() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>연혁</h1>
    </div>
    <h1 className="header">연혁</h1>
    <div className='start'>
    </div>
    <div>
      <img src={연혁사진} className='yeonheok'></img>
    </div>
  </div>
  );
}

export default 연혁;
