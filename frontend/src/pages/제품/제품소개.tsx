import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import './제품소개.css';
import G801 from './G80 1.png';
import G802 from './G80 2.png';
import G80 from './G80.png';
import G80EV from './G80EV.png';
import KONA from './KONA.png';
import PORTER from './PORTER.png';
import PALISADE from './PALISADE.png';
import SANTAFE from './SANTAFE.png';
import AVANTE from './AVANTE.png';
import G90 from './G90.png';



export default function 제품소개() {
  // Set tabIndex to 1 by default to show the first tab on load
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'GENESIS G80', value: '1' },
    { name: 'GENESIS G80 EV', value: '2' },
    { name: 'KONA', value: '3' },
    { name: 'POTER II', value: '4' },
    { name: 'PALISADE', value: '5' },
    { name: 'SANTA FE', value: '6' },
    { name: 'AVANTE', value: '7' },
    { name: 'GENESIS G90', value: '8' },
    
  ];


  return (
    <div>
      <div>
            <h1 className='header1'>제품소개</h1>
            <div className='start'></div>
      </div>
      <ButtonGroup className='button-group Buttons'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style={{ color: '#1e3d7d', fontSize:'18px', fontWeight:'700', backgroundColor: 'white', borderColor: '#1e3d7d', borderTopWidth:'3px' }} // Green background and border
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {radioValue === '1' && (
        <>
          <div className='main'>
            <div className='twobyoneA'>
            <img src='https://www.genesis.com/content/dam/genesis-p2/kr/bto/jj/a/jj_uyh_a.png.thumb.1280.720.png' className='companyimg'></img>
            </div>
      
            <div className='twobyoneB'>
            <h1 className='header2'>Project RG3 PE (GENESIS G80)</h1>
            <hr></hr>
            <h4>생산량 (Annual Output): <span className='bold logocolor3'>48,640대/년</span></h4>
            <h4>양산시점 (Release): <span className='bold logocolor3'>2020년</span></h4>
            <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
            <br></br>
            <h3 className='bold'>Pt.1 주요공법</h3>
            <ul>
              <li><h3>MAIN TRIM: <span className='bold logocolor3'>천연 기재 + IMG 성형</span></h3></li>
              <li><h3>GARNISH: <span className='bold logocolor3'>3D INSERT FILM</span></h3></li>
              <li><h3>CENTER TRIM: <span className='bold logocolor3'>PU 수작업 감싸기 / IMG 진공 성형</span></h3></li>
              <li><h3>M/POCKET INR: <span className='bold logocolor3'>진동 융착</span></h3></li>
            </ul>
            <h3 className='bold'>Pt.2 주요공법</h3>
            <ul>
              <li><h3>CORE: <span className='bold logocolor3'>PLASTIC</span></h3></li>
              <li><h3>GARNISH: <span className='bold logocolor3'>PU 수작업 감싸기</span></h3></li>
              <li><h3>C/PAD LWR DRV: <span className='bold logocolor3'>PU 수작업 감싸기</span></h3></li>
              <li><h3>C/PAD LWR PAS: <span className='bold logocolor3'>PU 수작업 감싸기</span></h3></li>
            </ul>
            <hr></hr>
            <br></br>
            </div>
            <div>
              <h2 className='bold'>Pt.1 제품구성도 Bill of Material</h2>
              <img src={G802} className='map'></img>
              <img src={G801}className='map'></img>
              <br></br>
              <hr></hr>
              <h2 className='bold'>Pt.2 제품구성도 Bill of Material</h2>
              <img src={G80} className='map'></img>
            
            </div>
            <hr></hr>
            
            
          </div>
        </>
      )}

      {radioValue === '2' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://hips.hearstapps.com/hmg-prod/images/2026-genesis-electrified-g80-102-66855613efd37.jpg?crop=0.554xw:0.469xh;0.333xw,0.315xh&resize=1200:*' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project RG3 PE EV (GENESIS G80 EV)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>3,670대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2020년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>MAIN TRIM: <span className='bold logocolor3'>천연 기재 + IMG 성형</span></h3></li>
             <li><h3>GARNISH: <span className='bold logocolor3'>3D INSERT FILM</span></h3></li>
             <li><h3>CENTER TRIM: <span className='bold logocolor3'>PU 수작업 감싸기 / IMG 진공 성형</span></h3></li>
             <li><h3>M/POCKET INR: <span className='bold logocolor3'>진동 융착</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={G80EV} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )}

      {radioValue === '3' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://hyundaioem.b-cdn.net/files/2023/07/IEW52J61VGG972_WEB_Front_Angle_RRR_1000x667.png' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project SX2 (KONA)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>39,500대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2023년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>UPPER TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>CENTER TRIM: <span className='bold logocolor3'>TPU / CLOTH 감싸기</span></h3></li>
             <li><h3>ARM REST: <span className='bold logocolor3'>고압 사출 / IMG 진공 성형</span></h3></li>
             <li><h3>LWR TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={KONA} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )}

      {radioValue === '4' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://www.hyundai.com/static/images/model/porter2/24my/mo/porter2_line_up_long_axis_super_cap_premium_m.jpg' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project HR (PORTER II)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>118,810대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2023년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>UPPER TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>CENTER TRIM: <span className='bold logocolor3'>TPU 감싸기</span></h3></li>
             <li><h3>ARM REST: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>LWR TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={PORTER} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )}

      {radioValue === '5' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/13/463730/462604/hyundai_palisade_2018_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_5257320.jpg' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project LX2 PE (PALISADE)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>62,430대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2018년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>MAIN TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>CENTER TRIM: <span className='bold logocolor3'>PU 수작업 감싸기 / IMG 진공 성형</span></h3></li>
             <li><h3>GARNISH: <span className='bold logocolor3'>수압 전사</span></h3></li>
             <li><h3>MAP POCKET: <span className='bold logocolor3'>고압 사출</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={PALISADE} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )}

      {radioValue === '6' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://i.namu.wiki/i/geJZ98xFzIWzh5mqIhhvS-6q7jhCVMzDcwLRbK5FbPxc83IVq6NuZH-iOlqKI1gC_hfcaZ3zWGY_bN7t9U_9BQ.webp' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project MX5 (SANTA FE)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>34,270대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2023년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>MAIN TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>ARM REST: <span className='bold logocolor3'>PU 수작업 감싸기 / IMG 진공 성형</span></h3></li>
             <li><h3>GARNISH: <span className='bold logocolor3'>수압 전사</span></h3></li>
             <li><h3>MAP POCKET: <span className='bold logocolor3'>고압 사출</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={SANTAFE} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )}
      
      {radioValue === '7' && (
         <>
         <div className='main'>
           <div className='twobyoneA'>
           <img src='https://i.namu.wiki/i/b8xMbKQS37Gb01nfCFholmMXq1GcdaOkLujcEpP7lafQpXofjFmJ0nobVe21eYHzDshvNnXJCHznwwTb1UD4VQ.webp' className='companyimg'></img>
           </div>
     
           <div className='twobyoneB'>
           <h1 className='header2'>Project CN7 PE (AVANTE)</h1>
           <hr></hr>
           <h4>생산량 (Annual Output): <span className='bold logocolor3'>220,490대/년</span></h4>
           <h4>양산시점 (Release): <span className='bold logocolor3'>2020년</span></h4>
           <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (서연이화)</span></h4>
           <br></br>
           <h3 className='bold'>주요공법</h3>
           <ul>
             <li><h3>MAIN TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
             <li><h3>CENTER TRIM: <span className='bold logocolor3'>TPU/CLOTH 감싸기</span></h3></li>
             <li><h3>ARM REST: <span className='bold logocolor3'>IMG 진공 성형</span></h3></li>
             <li><h3>LWR TRIM: <span className='bold logocolor3'>고압 사출</span></h3></li>
           </ul>
           <hr></hr>
           <br></br>
           </div>
           <div>
             <h2 className='bold'>제품구성도 Bill of Material</h2>
             <img src={AVANTE} className='map'></img>
           
           </div>
           <hr></hr>
           
           
         </div>
       </>
      )} 
      {radioValue === '8' && (
        <>
        <div className='main'>
          <div className='twobyoneA'>
          <img src='https://www.genesis.com/content/dam/genesis-p2/kr/assets/utility/sns/og-kr-genesis-g90-23my-facebook.jpg' className='companyimg'></img>
          </div>
    
          <div className='twobyoneB'>
          <h1 className='header2'>Project RS4 (GENESIS G90)</h1>
          <hr></hr>
          <h4>생산량 (Annual Output): <span className='bold logocolor3'>13,690대/년</span></h4>
          <h4>양산시점 (Release): <span className='bold logocolor3'>2021년</span></h4>
          <h4>고객사 (Customer): <span className='bold logocolor3'>HMC (용산/KBI 동국실업)</span></h4>
          <br></br>
          <h3 className='bold'>주요공법</h3>
          <ul>
            <li><h3>TOP COVER: <span className='bold logocolor3'>쳔연가죽 감싸기</span></h3></li>
            <li><h3>DRIVE SIDE: <span className='bold logocolor3'>천연가죽 감싸기</span></h3></li>
            <li><h3>PASSENGER SIDE: <span className='bold logocolor3'>PU 감싸기</span></h3></li>
            <li><h3>MAIN LWR: <span className='bold logocolor3'>PU 감싸기</span></h3></li>
            <li><h3>GLOVE BOX: <span className='bold logocolor3'>PU 감싸기</span></h3></li>
          </ul>
          <hr></hr>
          <br></br>
          </div>
          <div>
            <h2 className='bold'>제품구성도 Bill of Material</h2>
            <img src={G90} className='map'></img>
          
          </div>
          <hr></hr>
          
          
        </div>
      </>
     )}





    </div>
    
  );
}
