import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import './경영목표.css';
import goal from '../../goal.svg'
import quality from '../../quality.svg'
import increase from '../../increase.svg'
import safety from '../../safety.svg'
import A from '../../A+.svg'



function 경영목표() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>경영목표</h1>
    </div>
    <h1 className="header">경영목표</h1>
    <div className='start'></div>

    <div className='goals'>
      <img src={goal} className="goal"></img>
      <h1 className='year'>2024' GOAL</h1>
    </div>
    <div className='goaldetails'>
      <table>
        <tr>
          <td><img src={increase} className='icons'></img></td>
          <td className='detail1'>매출액 증대를 위한 솔루션 구축</td>
          <td className='detail2'>
            <ul>
              <li>
                2021: 579억
              </li>
              <li>
                02022: 604억
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><img src={quality} className='icons'></img></td>
          <td className='detail1'>품질목표</td>
          <td className='detail2'>
            <ul>
              <li>
              HMC 사출 SQ Level “G”
              </li>
              <li>
              SQ Level “G” 유지 
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><img src={safety} className='icons'></img></td>
          <td className='detail1'>안전관리 시스템</td>
          <td className='detail2'>
            <ul>
              <li>
                폭설, 폭우 등 기상재해 조기대응시스템 운영
              </li>
              <li>
              지진 발생시 지정된 대피장소 이동/ 사전 메뉴얼 교육
              </li>
              <li>
              화재시 정기 교육된 소방조직으로 초기 진압
              </li>
            </ul>
            </td>
        </tr>
        <tr>
          <td><img src={A} className='icons'></img></td>
          <td className='detail1'>기업경쟁력 강화</td>
          <td className='detail2'>
            <ul>
              <li>
              사출공정의 스마트 팩토리 도입으로 생산 및 품질 향상
              </li>
              <li>
              사출부터 조립공정으로 총괄적인 생산 운영 능력 강화
              </li>
              <li>
              상품성 개선/고급화의 신기술 개발로 가격경쟁력 강화
              </li>
            </ul>
          </td>        
        </tr>
      </table>
    </div>

  </div>
  );
}

export default 경영목표;
