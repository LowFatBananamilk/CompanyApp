import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import './회사정보.css'; 
import '../divs.css';
import company from './company.svg';
import workers from './workers.svg';
// import CI from '../CI.png'
import CI from '../CIGif.gif'
import { Map } from '../../components'
import 회사전경 from './회사전경.jpg'

function 회사정보() {
  return (
  <div>
    <div>
    <h1 className='header1'>회사소개</h1>
    <div className='start'></div>
    </div>

    <div className='main'>
      <div className='twobyoneA'>
        <img src={회사전경} className='companyimg'></img>
      </div>
      
      <div className='twobyoneB'>
        <h1 className='header2'>회사소개</h1>
        <hr></hr>
        <h2><span className='light'><span className='bold logocolor3'>최고 수준의 기술</span>을 바탕으로, <span className='bold logocolor3'>최고 품질을 통한 시대에 부응</span>하는 <span className='bold logocolor2'>한진PL</span>이 되겠습니다.</span></h2>
        <br></br>
        <h4 className='light'>
          <p>한진피엘㈜은 사출 라인과 조립 라인이 동시에 갖추어져 있는 자동차 내장재 생산 전문 기업으로서 20년의 역사와 기술력을 바탕으로 높은 수준의 기술을 확보하고 있습니다.</p> 
          <p>당사는 끊임없는 품질 향상과 기술혁신을 통해 고객 가치를 창출, 사회적 책임을 다하고자 노력을 다하고 있으며 다양화된 고객의 니즈와 시장의 요구를 제품에 반영, 시대에 요구에 부응하는 미래지향적인 기업으로 성장해 나갈 것입니다.</p>
        </h4>
      </div>
      
      <br></br>
      
      <div className='oneA'>
        <h1 className='header2'>CEO 인사말</h1>
        <hr></hr>
        <h2 className='center white CEO'>
        끊임없는 도전과 열정으로 성장하고 있는 한진PL에 방문해주신 여러분을 환영합니다.
        </h2>
        <h5 className='light'>
        <p>
        글로벌 자동차 산업의 판도는 기업의 새로운 도전과 혁신이 요구 되고 있고, 한진피엘㈜은 이러한 변화에 대응하고 나아가 그동안 축적된 역량과 기술을 바탕으로 미래 기술력 우위 확보와 더불어 창의적이고 열정적인 임직원들과 함께 새로운 도약을 위한 노력을 하고 있습니다.
        </p>
        <p>
        2008년에 법인 출범 이후 자동차 내장재 생산 전문 기업으로 DOOR TRIM을 주력으로 생산 및 공급, 매출 확대 및 신사업 추진을 위해 기존 고객들의 프로젝트에 참여와 신규 영업 활동을 강화하여 사업 영역을 지속적으로 확대해 나아감과 동시에 최고의 제품으로 고객감동을 실현하고, 기업 가치의 질적 향상을 이룩하기 위해 책임감과 사명감을 가지고 글로벌 자동차 산업의 급변하는 시장 상황을 성장과 도약의 기회로 삼고자 합니다.
        </p>
        <p>
        한진피엘㈜ 앞에 놓인 급변하는 글로벌 자동차 시장 앞에 끊임없는 도전과 열정을 통해 최고의 경쟁력을 확보하여, 자동차 내장재 생산 업계의 핵심 기업으로 노력이 결실을 맺을 수 있도록 힘쓰겠습니다.
        </p>
        <p>감사합니다.</p>
        <p className='right logocolor3'>한진피엘㈜ 대표이사 류지민</p>
        </h5>
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
        <br></br>
        <br></br>
      </div>

      <div className='oneA'>
      <h1 className='header2'>CI소개</h1>
      <hr></hr>
      </div>
      <div className='twobyoneE'>
        <img src={CI} className='logoimg'></img>
      </div>
      <div className='twobyoneF'>
        <h3>현재를 뛰어넘어 미래 가치 창조를 향해 전진하는 기업정신을 표현하고 있습니다.</h3>
        <br></br>
        <h4 className='logocolor3'>의미설명</h4>
        <h5 className='light'><p>㈜신진엔지니어링과 ㈜한진피엘에 공통적으로 적용되는 이니셜 J를 심볼화한 로고입니다.</p>
        <p>좌측에는 이니셜을 우측으로는 나아가는 그래픽을 배치하여, 미래가치를 창조하고 길을 열어간다는 의미를 담았습니다.</p>
        <p>딥한 그린계열의 컬러를 메인으로 진중하고 신뢰감 있는 분위기를 전달합니다.</p></h5>
        <br></br>
        <br></br>
      </div>

      <div className='oneA'>
        <h1 className='header2'>오시는길</h1>
        <hr></hr>
        <Map latitude={35.724136980121614} longitude={129.28241053771103} zoom={4} />
      </div>
  </div>
</div>
  

  );
}
export default 회사정보;
