import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import './설비현황.css';


export default function 설비현황() {
  return (
    <div>
        <div>
            <h1 className='header1'>설비현황</h1>
            <div className='start'></div>
        </div>

        <div className='main'>
            <div className='oneA'>
                <h1 className='header2'>공정설비현황</h1>
                <hr></hr>
            </div>
            
            <table className='t33'>
              <tr className='t33r'>
                <td className='t33d1'>1호기</td>
                <td className='t33d2'>JSW 1,800 TON</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>2호기</td>
                <td className='t33d2'>JSW 650 TON</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>3호기</td>
                <td className='t33d2'>미쯔비시 2,000 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>4호기</td>
                <td className='t33d2'>우진프라임 650 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>5호기</td>
                <td className='t33d2'>미쯔비시 1,050 TON</td>
                <td className='t33d3'>하이브리드</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>6호기</td>
                <td className='t33d2'>JSW 850 TON</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>7호기</td>
                <td className='t33d2'>우진 1,300 TON</td>
                <td className='t33d3'>하이브리드</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>8호기</td>
                <td className='t33d2'>도시바 1,300 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>9호기</td>
                <td className='t33d2'>도시바 1,300 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>10호기</td>
                <td className='t33d2'>도시바 1,600 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>11호기</td>
                <td className='t33d2'>구매진행예정</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>12호기</td>
                <td className='t33d2'>도시바 450 TON</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>13호기</td>
                <td className='t33d2'>JSW 450 TON</td>
                <td className='t33d3 blue'>전동식</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d1'>14호기</td>
                <td className='t33d2'>도시바 650 TON</td>
                <td className='t33d3'>유압식</td>
              </tr>
            </table>

            <table className='t33'>
              <tr className='t33r'>
                <td className='t33d1'>NO</td>
                <td className='t33d1'>설비명</td>
                <td className='t33d1'>용량</td>
                <td className='t33d1'>대수</td>
                <td className='t33d1'>비고</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>1</td>
                <td className='t33d2'>IMG 진공 성형기</td>
                <td className='t33d2'>30 TON</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>IMG 매스비끼</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>2</td>
                <td className='t33d2'>IMG 진공 성형기</td>
                <td className='t33d2'>15 TON</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>IMG 매스비끼</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>3</td>
                <td className='t33d2'>IMG 진공 성형기</td>
                <td className='t33d2'>15 TON</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>IMG 매스비끼</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>4</td>
                <td className='t33d2'>IMG 진공 성형기</td>
                <td className='t33d2'>15 TON</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>IMG 매스비끼</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>5</td>
                <td className='t33d2'>진공 성형기</td>
                <td className='t33d2'>50 kw</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>IMG 매스비끼</td>
              </tr>
              <tr className='t33r'>
                <td className='t33d2'>6</td>
                <td className='t33d2'>진공 성형기</td>
                <td className='t33d2'>150 TON</td>
                <td className='t33d2'>1</td>
                <td className='t33d3'>오스비끼</td>
              </tr>
              
            </table>
        </div>
    </div>
  );
}
