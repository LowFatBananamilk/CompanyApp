import React from 'react';
import './Vision.css'
import '../Font&Color.css'
import '../thumbnail&details.css'
import '../divs.css'
import logo from '../logo.png' 
import visionbg from './visionbg.jpg'
import 연혁사진 from './연혁사진.png'
import 조직도사진 from './조직도사진.png'

function Vison() {
  return (
  <div>
    <div>
    <h1 className='header1'>Vision</h1>
    <div className='start'></div>
    </div>

    <div className='main'>
      <div className='twobyoneC'>
        <img src={visionbg} className='visionbg'></img>
      </div>
      
      <div className='twobyoneD'>
        <h1 className='header2'>경영이념</h1>
        <hr></hr>
        <h4>
          <span className='light big'>
            항상 <span className='bold logocolor3'>초심의 자세</span>와, 
            <span className='bold logocolor3'> 끊임없는 노력</span>으로
            시대의 변화에 대응, 고객의 요구에 부응함으로써 
            <span className='bold logocolor2'> 미래 경쟁력 확보</span>
          </span>
        </h4>
        <br></br>
        <h4 >
          <p>한진피엘㈜은 현재에 안주하지 않고, 미래 경쟁력 확보를 통해</p> 
          <p>자동차 내장재 생산 업계의 핵심 기업이 되기 위해, 끊임없이 도전하고 있습니다.</p>
          <p>해당 경영 이념을 전 직원과 공유 내재화를 통해 공동체 의식과 소속감을 높이고,</p>
          <p>이를 통해 지속 가능한 성장과 발전을 이루어 나갈 것입니다.</p>
        </h4>
      </div>

      <div className='oneA'>
      <h1 className='header2'>연혁</h1>
      <hr></hr>
      <img src={연혁사진} className='imgfull'></img>
      </div>

      <div className='oneA'>
      <h1 className='header2'>조직도</h1>
      <hr></hr>
      <img src={조직도사진} className='imgfull2'></img>
      </div>
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

export default Vison;
