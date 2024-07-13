import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ESG경영.css'; 
import leaficon from './leaf icon.svg';
import pplicon from './pplicon.svg';
import societyicon from './societyicon.svg';

function ESG() {
  return (
    <div>
      <hr></hr>
      <br></br>
      <h1 className="header">ESG 경영</h1>
      <br></br>
      <div className="explanation">
        <br></br>
        <h3 className='det'>급변하는 경영환경 속에서 존경받는 글로벌 기업으로서</h3>
        <h3>모든 이해관계자들로부터 <span id='imp'>신뢰</span>를 확보하고 기업의 가치 변화와 니즈를 충족시키기 위하여</h3>
        <h3 id='imp'>환경(Environment)</h3>
        <h3 id='imp'>사회(Society)</h3>
        <h3 id='imp'>지배구조(Governance)</h3>
        <h3>각 영역별로 아래와 같이 변화와 확신을 추구하겠습니다.</h3>
      </div>

      <div className='ESGicons'>
        <div className='Card'>
          
          <h4 id="boldgreen">친환경 중심의 경영 혁신</h4>
          <img src={leaficon} className="App-logo" alt="leaf"/>
          <ul>
            <li id='listleft'>인권 및 다양성 존중</li>
            <li id='listleft'>안전 및 보건</li>
          </ul>
        </div>
        <div className='Card'>
          <h4 id="boldgreen">사회를 위한 책임 경영 내재화</h4>
          <img src={societyicon} className="App-logo" alt="leaf"/>
          <ul>
            <li id='listleft'>인권 및 다양성 존중</li>
            <li id='listleft'>안전 및 보건</li>
          </ul>
        </div>
        <div className='Card'>
          <h4 id="boldgreen">투명성과 효율성 제고</h4>
          <img src={pplicon} className="App-logo" alt="leaf"/>
          <ul>
            <li id='listleft'>감사의 독립성과 역할</li>
            <li id='listleft'>지속가능성</li>
            <li id='listleft'>전사 리스크 관리</li>
          </ul>
        </div>
      </div>  
      
      <br></br>
      <h1 className="headers">지속가능경영보고서</h1>
      <div className='wbox'>
        <h4 id='bold'>Leading Sustainable Auto Parts</h4>
        <h5 id='light'>한진PL은</h5>
      </div>




    </div>

      );
    }
export default ESG;

