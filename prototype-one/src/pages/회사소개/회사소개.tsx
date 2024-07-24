import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import './회사소개.css'; 
import '../divs.css';
import company from './company.svg';
import workers from './workers.svg';
import location from './location.svg'
import logo from '../logo.png'

function 회사소개() {
  return (
  <div>
    <div>
    <h1 className='header1'>회사소개</h1>
    <div className='start'></div>
    </div>

    <div className='main'>
      <div className='twobyoneA'>
        <img src='http://hanjinpl.co.kr/images/carrier_22.png' className='companyimg'></img>
      </div>
      
      <div className='twobyoneB'>
        <h1 className='header2'>회사소개</h1>
        <hr></hr>
        <h2><span className='light'><span className='bold logocolor3'>최고 수준의 기술</span>을 바탕으로, <span className='bold logocolor3'>최고 품질을 통한 시대에 부응</span>하는 <span className='bold logocolor2'>한진PL</span>이 되겠습니다.</span></h2>
        <br></br>
        <h4>
          <p>한진피엘㈜은 사출 라인과 조립 라인이 동시에 갖추어져 있는 자동차 내장재 생산 전문 기업으로서 20년의 역사와 기술력을 바탕으로 높은 수준의 기술을 확보하고 있습니다.</p> 
          <p>당사는 끊임없는 품질 향상과 기술혁신을 통해 고객 가치를 창출, 사회적 책임을 다하고자 노력을 다하고 있으며 다양화된 고객의 니즈와 시장의 요구를 제품에 반영, 시대에 요구에 부응하는 미래지향적인 기업으로 성장해 나갈 것입니다.</p>
        </h4>
      </div>
      
      <br></br>
      
      <div className='oneA'>
        <h1 className='header2'>CEO 인사말</h1>
        <hr></hr>
        <h2 className='center white CEO'>
        끊임없는 도전과 열정으로 성장하고 있는 기업에 방문해주신 여러분을 환영합니다. 
        </h2>
        <h4 className='light'>
        <p>
          무한경쟁 시대에서 기업이 살아남고 성장하기 위해서는 과거 고객의 니즈만 충족했던 고객만족과 달리 고객의 요구를 한 단계 앞서가는 고객만족이 요구되어지고 있습니다. 그렇기에 품질향상과 기술혁신, 글로벌 경영을 방침을 초석으로 미래를 향한 포석을 두기 위해 ㈜신진엔지니어링 경주공장은 그동안 축적된 역량과 기술을 바탕으로 미래 기술력 우위 확보와 더불어 창의적이고 열정적인 임직원들과 함께 새로운 도약을 위한 노력을 하고 있습니다.
        </p>
        <p>
          1993년에 설립 이후 플라스틱 사출 금형 개발 및 제작 및 사출 및 조립을 주력으로 생산 및 공급과 꾸준한 연구 개발과 지속적 기술 향상을 통해 높은 기술력을 확보 기존 고객만족 뿐 아니라, 신규 영업 활동을 강화하여 사업 영역을 지속적으로 확대하고 끊임없는 기술 혁신을 통하여 글로벌 자동차 산업의 급변하는 시장 상황을 성장과 도약의 기회로 삼고자 합니다.
        </p>
        <p>
          ㈜신진엔지니어링 경주공장은 급변하는 글로벌 자동차 시장 앞에 끊임없는 도전과 열정을 통해 최고의 경쟁력을 확보하고, 고객 만족 실현을 위한 노력이 결실을 맺을 수 있도록 힘쓰겠습니다.
        </p>
        <p>감사합니다.</p>
        <p className='right logocolor3'>㈜ 신진엔지니어링 경주공장 대표이사 김대웅</p>
        </h4>
      </div>

      <div className='oneA'>
      <h1 className='header2'>기업정보</h1>
      <hr></hr>
      </div>
      <div className='twobyoneC'>
        <table className='tableA'>
          <tr className='tableArow'>
            <th className='tableAheader'>설립일</th>
            <th className='tableAheader'>종업원</th>
          </tr>
          <tr className='tableArow'>
            <td><img src={company} className='tableAimg'></img></td>
            <td><img src={workers} className='tableAimg'></img></td>
          </tr>
          <tr className='tableArow'>
            <td className='tableAdetail'>2008.05.01</td>
            <td className='tableAdetail'>345명</td>
          </tr>
        </table>
      </div>

      <div className='twobyoneD'>
        <table className='tableB'>
          <tr className='tableBrow'>
            <th className='tableBheader'>회사명</th>
            <td className='tableBdetail'>한진PL</td>
          </tr>
          <tr className='tableBrow'>
            <th className='tableBheader'>대표이사</th>
            <td className='tableBdetail'>류지민</td>
          </tr>
          <tr className='tableBrow'>
            <th className='tableBheader'>주요사업</th>
            <td className='tableBdetail'>자동차 내장재 부품 개발, 제조, 판매</td>
          </tr>
          <tr className='tableBrow'>
            <th className='tableBheader'>주소</th>
            <td className='tableBdetail'>경북 경주시 외동읍 제내2공단길 94 한진피엘 ㈜</td>
          </tr>
        </table>
      </div>

      <div className='oneA'>
        <img src={location} className='locicon'></img>
        <h1 className='header3'>오시는길</h1>
        <a href="https://naver.me/xDsU3QAr">naver map</a>
      </div>
    </div>

    <div className="footer">
      <img src={logo} className='logo'></img>
      <h6 className='grey'>[본사] 경북 경주시 외동읍 제내2공단길 94 한진피엘 ㈜ | Tel 031-420-3200 | Fax 031-420-3120
      </h6>
      <h6 className='grey'>COPYRIGHT © 2021 <span className='white'>HANJIN PL.</span> ALL RIGHT RESERVED.
      </h6>
    </div>

  </div>
  

  );
}

export default 회사소개;
