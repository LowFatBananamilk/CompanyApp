import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import './경영방침.css'; 
import logo from '../../logo.jpeg'
import worker from '../../worker.svg'
import stonks from '../../stonks.svg'
import tech from '../../tech.svg'
import leaf from '../../leaf.svg'
import quality from '../../quality.svg'

function 경영방침() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>경영방침</h1>
    </div>
    <h1 className="bold logocolor2 center big header">경영방침</h1>
    <div className='start'></div>

    <img src={quality}className='titlelogo1'></img>
    <img src={leaf} className='titlelogo2'></img>

    <div className="topic1">
      <h2 className='white bold center'>품질경영방침</h2>
    </div>
    <div className="topic2">
      <h2 className='white bold center'>환경경영방침</h2>
    </div>

    <div className='box'></div>

    <div className='box1'>
      <table className='miniboxes1'>
        <tr>
          <td><img src={worker}></img></td>
          <p className='p1'>1. 고객 최우선</p>
        </tr>
        <tr>
          <td><img src={stonks}></img></td>
          <p className='p1'> 2. 경쟁력 강화</p>
        </tr>
        <tr>
          <td><img src={tech}></img></td>
        <p className='p1'> 3. 미래차 신성장동력 확보</p>
        </tr>
      </table>
    </div>

    <div className='box2'>
      <table className='miniboxes2'>
        <tr>
          <p className='p2'>1. 국내외 모든 환경법규의 요구 준수<p>및 사내 환경 요구 조건 만족</p></p>
        </tr>
        <tr>
          <p className='p2'>2. 환경의식 확산과 사내 환경 개선을 통한<p>환경경영 체계 정립</p></p>
        </tr>
        <tr>
          <p className='p2'>3. 생산과정에서의 오염물질을 근원적으로<p>감소시키기 위한 청정 생산기술 확보</p></p>
        </tr>
        <tr>
          <p className='p2'>4. 제품 생산공정에서 발생하는 환경유해 물질을 줄이기 위한 환경 친화적 제품설계 활동 전개 </p>
        </tr>
        <tr>
          <p className='p2'>5. 협력업체 환경경영체계 구축 기반마련</p>
        </tr>
      </table>
    </div>


  </div>
  );
}

export default 경영방침;
