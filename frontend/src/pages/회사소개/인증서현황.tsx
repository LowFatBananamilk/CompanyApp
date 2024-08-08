import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import first from './인증서.png';
import second from'./second.png';
import './인증서현황.css';


export default function 인증서현황() {
  return (
    <div> 
        <div>
            <h1 className='header1'>인증서 현황</h1>
            <div className='start'></div>
        </div>

        <div className='main'>
            <div className='oneA'>
                <h1 className='header2'>2009 ~ 2024</h1>
                <hr></hr>
            </div>
            <br></br>
              <table className='tabletbt'>
                <tr className='tabletbtr'>
                  <td className='tabletbth'>2023</td>
                  <td className='tabletbth'>2024</td>
                </tr>
                <tr className='tabletbtr'>
                  <td className='tabletbtd'>
                    <img src={second} className='tabletbtimgA'></img>
                  </td>
                  <td className='tabletbtd'>
                    <img src={first} className='tabletbtimgB'></img>
                  </td>
                </tr>
              </table>
            <br></br>
        </div>
    </div>
  );
}
