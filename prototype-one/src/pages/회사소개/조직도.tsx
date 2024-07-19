import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import './조직도.css'
import 조직 from '../../조직도.svg';


function 조직도() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>조직도</h1>
    </div>
    <h1 className="header">조직도</h1>
    <div className='start'>
    </div>
    
    <div className="mainone">
      <img src={조직} className='jojik'></img>
    </div>
  </div>
  );
}

export default 조직도;
