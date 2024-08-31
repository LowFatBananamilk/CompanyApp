import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import { Map } from '../../components'
import './관계사.css'
import logo from '../logo.png'


export default function 관계사() {
  return (
    <div>
        <div> 
            <h1 className='header1'>관계사</h1>
            <div className='start'></div>
        </div>

        <div className='main'>
            <div className='oneA'>
                <h1 className='header2'>신진엔지니어링 경주공장</h1>
                <hr></hr>
            </div>
            <div className='twobyoneC'>
                <table className='tableA'>
                <tr className='tableArow'>
                    <th className='tableAheader'>회사전경</th>
                </tr>
                <tr className='tableArow'>
                <img src={logo} className='companypic'></img>
                </tr>
                </table>
            </div>

            <div className='twobyoneD'>
                <table className='tableB'>
                <tr className='tableBrow'>
                    <th className='tableBheader'>주소</th>
                    <td className='tableBdetail'>경북 경주시 외동읍 외남로 1704-58</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>주생산품</th>
                    <td className='tableBdetail'>DOOR TRIM, FENDER INSULATOR, END PALATE CVR 등</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>전화</th>
                    <td className='tableBdetail'>054-776-2488</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>팩스</th>
                    <td className='tableBdetail'>054-776-2489</td>
                </tr>
                </table>
            </div>
            <h1 className='header3'>오시는길</h1>
            <Map latitude={35.693212283910405} longitude={129.31246033663027} zoom={8} />
            
        </div>

        <div className='main'>
            <div className='oneA'>
                <h1 className='header2'>신진엔지니어링 문산공장</h1>
                <hr></hr>
            </div>
            <div className='twobyoneC'>
                <table className='tableA'>
                <tr className='tableArow'>
                    <th className='tableAheader'>회사전경</th>
                </tr>
                <tr className='tableArow'>
                <img src={logo} className='companypic'></img>
                </tr>
                </table>
            </div>

            <div className='twobyoneD'>
                <table className='tableB'>
                <tr className='tableBrow'>
                    <th className='tableBheader'>주소</th>
                    <td className='tableBdetail'>경북 경주시 외동읍 문산2산단4로 13</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>주생산품</th>
                    <td className='tableBdetail'>DOOR MODULE, A/REST, CRASH PAD, CLUSTER 등</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>전화</th>
                    <td className='tableBdetail'>054-701-1313</td>
                </tr>
                <tr className='tableBrow'>
                    <th className='tableBheader'>팩스</th>
                    <td className='tableBdetail'>054-701-1314</td>
                </tr>
                </table>
            </div>
            <h1 className='header3'>오시는길</h1>
            <Map latitude={35.693212283910405} longitude={129.31246033663027} zoom={8} />
            
        </div>

    </div>
  );
}
