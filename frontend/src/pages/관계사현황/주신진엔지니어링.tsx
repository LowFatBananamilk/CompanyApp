import React from 'react';
import 사출 from './사출.png'
import IMG from './IMG.png'
import '../divs.css'
import '../Font&Color.css'
import './제조공정.css'

import 지원 from './지원.svg'
import 합격 from './합격.svg'
import 인터뷰 from './인터뷰.svg'
import 서류 from './서류.svg'
import './채용정보.css'


export default function 주신진엔지니어링() {
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
            

            <div className='oneA'>
            <br></br>
            <h1 className='header2'>채용정보</h1>
            <hr></hr>
            <br></br>
            <table className='apptable'>
                <tr className='approw'>
                <td><img src={지원} className='appimg'></img></td>
                <td><img src={서류} className='appimg'></img></td>
                <td><img src={인터뷰} className='appimg'></img></td>
                <td><img src={합격} className='appimg'></img></td>
                </tr>
                <tr className='approw'>
                <th className='appth'>I. 입사지원(온라인)</th>
                <th className='appth'>II. 서류전형 심사</th>
                <th className='appth'>III. 인터뷰 심사</th>
                <th className='appth'>IV. 최종합격</th>
                </tr>
            </table>
            </div>


        </div>
    </div>
    )
}
