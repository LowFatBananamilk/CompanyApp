import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import IMG from './IMG.png'
import 사출 from './사출.png'
import './제조공정.css'


export default function 제조공정() {
  return (
    <div>
        <div> 
            <h1 className='header1'>제조공정</h1>
            <div className='start'></div>
        </div>

        <div className='main'>
            <div className='oneA'>
                <h1 className='header2'>제조공정 (사출)</h1>
                <hr></hr>
            </div>
            <div className='twobyoneC border1'>
                <h2 className='defq'>사출이란?</h2>
                <h4 className='def'>성형 수지(원소재)를 가열하여 용융상태로 만든 후, 원하는 형상의 캐비티(CAVITY)를 갖는 금형 내부로 고속, 고압으로 성형 수지(원소재)를 주입하여 냉각시킨 후 형(型)을 열어 성형품을 얻는 방법이다.
                </h4>
            </div>
            <div className='twobyoneD'>
                <img src={사출} className='imgfull3'></img>
            </div>

            <div className='oneA'>
                <br></br>
            </div>

            <div className='oneA'>
                <h1 className='header2'>제조공정 (IMG)</h1>
                <hr></hr>
            </div>
            <div className='twobyoneC border1'>
                <h2 className='defq'>IMG란?</h2>
                <h4 className='def'>
                FORM SKIN재를 예열 및 진공 성형 시 금형으로 EMBO를 만드는 공법을 말하며, 진공 성형 내에서도 압착 방식이나 성형 방법에 따라 여러 가지 공법이 있다. 
                </h4>
            </div>
            <div className='twobyoneD'>
                <img src={IMG} className='imgfull3'></img>
            </div>

            <div className='oneA'>
                <br></br>
            </div>

            <div className='oneA'>
                <h1 className='header2'>제조공정 (감싸기)</h1>
                <hr></hr>
            </div>
            <div className='twobyoneC border1'>
                <h2 className='defq'>감싸기란?</h2>
                <h4 className='def'>
                각종 내장재 부품에 수작업으로 BOND, TACKER등을 이용하여 감싸기 하는 것을 말하며, SKIN의 종류 및 제품 형상에 따라 여러 형태의 감싸기로 제품을 생산하는 것을 말한다. 
                </h4>
            </div>
            <div className='twobyoneD'>
                <img src={IMG} className='imgfull3'></img>
            </div>

        </div>
    </div>
  );
}
