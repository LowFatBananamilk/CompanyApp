import React from 'react';
import status from '../../매출현황.png'
import './매출현황.css'

function 매출현황() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>매출현황</h1>
    </div>
    <h1 className="header">매출현황</h1>
    <div className='start'>
    </div>
    <div>
      <img src={status} className='status'></img>
    </div>
  </div>
  );
}

export default 매출현황;
