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
        <tr className='tabler'>
          <td className='tabled'><img src={increase} className='icons'></img></td>
          <td className='detail1 tabled'>매출액 증대를 위한 솔루션 구축</td>
          <td className='detail2 tabled'>
            <ul className='ulist'>
              <li className='list'>
                2021: 579억
              </li>
              <li className='list'>
                02022: 604억
              </li>
            </ul>
          </td>
        </tr>
        <tr className='tabler'>
          <td className='tabled'><img src={quality} className='icons'></img></td>
          <td className='detail1 tabled'>품질목표</td>
          <td className='detail2 tabled'>
            <ul className='ulist'>
              <li className='list'>
              HMC 사출 SQ Level “G”
              </li>
              <li className='list'>
              SQ Level “G” 유지 
              </li>
            </ul>
          </td>
        </tr>
        <tr className='tabler'>
          <td className='tabled'><img src={safety} className='icons'></img></td>
          <td className='detail1 tabled'>안전관리 시스템</td>
          <td className='detail2 tabled'>
            <ul className='ulist'>
              <li className='list'>
                폭설, 폭우 등 기상재해 조기대응시스템 운영
              </li>
              <li className='list'>
              지진 발생시 지정된 대피장소 이동/ 사전 메뉴얼 교육
              </li>
              <li className='list'>
              화재시 정기 교육된 소방조직으로 초기 진압
              </li>
            </ul>
            </td>
        </tr>
        <tr className='tabler'>
          <td className='tabled'><img src={A} className='icons'></img></td>
          <td className='detail1 tabled'>기업경쟁력 강화</td>
          <td className='detail2 tabled'>
            <ul>
              <li className='list'>
              사출공정의 스마트 팩토리 도입으로 생산 및 품질 향상
              </li>
              <li className='list'>
              사출부터 조립공정으로 총괄적인 생산 운영 능력 강화
              </li>
              <li className='list'>
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
