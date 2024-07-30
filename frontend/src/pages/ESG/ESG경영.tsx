import React from 'react';
import logo from '../logo.png'
import Card from 'react-bootstrap/Card';
import '../divs.css'
import '../Font&Color.css'
import './ESG경영.css'
import E from './E.svg'
import S from './S.svg'
import G from './G.svg'
import E1 from './E1.svg'
import E2 from './E2.svg'
import E3 from './E3.svg'
import E4 from './E4.svg'
import S1 from './S1.svg'
import S2 from './S2.svg'
import S3 from './S3.svg'
import S4 from './S4.svg'
import G1 from './G1.svg'
import G2 from './G2.svg'
import G3 from './G3.svg'
import G4 from './G4.svg'


function ESG경영() {
  return (
    <div>
      <div className='main'>
        <div> 
            <h1 className='header1'>ESG 경영</h1>
            <div className='start'></div>
        </div>
        <div className='oneA'><hr></hr></div>
        <div className='oneA bg2'>
          <Card className='introcard Ecard'>
          <Card.Img variant="top" className='intropic' src={E} />
          <Card.Body>
            <Card.Title className='env'><span className='acny'>E</span>nvironment 환경</Card.Title>
          </Card.Body>
          </Card>
          
          <Card className='threebythreecard Ecard'>
          <Card.Img variant="top" className='cardpic' src={E1} />
          <Card.Body>
            <Card.Title className='cardtitle'>친환경 기업 운영</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Ecard'>
          <Card.Img variant="top" className='cardpic' src={E2} />
          <Card.Body>
            <Card.Title className='cardtitle'>온실가스 배출 감축 관리</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Ecard'>
          <Card.Img variant="top" className='cardpic' src={E3} />
          <Card.Body>
            <Card.Title className='cardtitle'>효율적 에너지 사용 관리</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Ecard'>
          <Card.Img variant="top" className='cardpic' src={E4} />
          <Card.Body>
            <Card.Title className='cardtitle'>작업장 안전/보건/환경 관리</Card.Title>
          </Card.Body>
          </Card>
        </div>

        <div className='oneA bg2'>
          <Card className='introcard Scard'>
          <Card.Img variant="top" className='intropic' src={S} />
          <Card.Body>
            <Card.Title className='soc'><span className='acny'>S</span>ociety <br></br>사회</Card.Title>
          </Card.Body>
          </Card>
          
          <Card className='threebythreecard Scard'>
          <Card.Img variant="top" className='cardpic' src={S1} />
          <Card.Body>
            <Card.Title className='cardtitle'>상생협력 경영 확대</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Scard'>
          <Card.Img variant="top" className='cardpic' src={S2} />
          <Card.Body>
            <Card.Title className='cardtitle'>직원 만족도 제고</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Scard'>
          <Card.Img variant="top" className='cardpic' src={S3} />
          <Card.Body>
            <Card.Title className='cardtitle'>품질경영을 통한 고객 만족</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Scard'>
          <Card.Img variant="top" className='cardpic' src={S4} />
          <Card.Body>
            <Card.Title className='cardtitle'>사회 공헌 활동 확대</Card.Title>
          </Card.Body>
          </Card>
        </div>

        <div className='oneA bg2'>
          <Card className='introcard Gcard bg2'>
          <Card.Img variant="top" className='intropic' src={G} />
          <Card.Body>
            <Card.Title className='gov'><span className='acny'>G</span>overnance 지배구조</Card.Title>
          </Card.Body>
          </Card>
          
          <Card className='threebythreecard Gcard'>
          <Card.Img variant="top" className='cardpic' src={G1} />
          <Card.Body>
            <Card.Title className='cardtitle'>투명 경영 방침 강화</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Gcard'>
          <Card.Img variant="top" className='cardpic' src={G2} />
          <Card.Body>
            <Card.Title className='cardtitle'>준법 경영</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Gcard'>
          <Card.Img variant="top" className='cardpic' src={G3} />
          <Card.Body>
            <Card.Title className='cardtitle'>주주 이익 극대화</Card.Title>
          </Card.Body>
          </Card>

          <Card className='threebythreecard Gcard'>
          <Card.Img variant="top" className='cardpic' src={G4} />
          <Card.Body>
            <Card.Title className='cardtitle'>공시/회계 투명성 보장</Card.Title>
          </Card.Body>
          </Card>
        </div>
        <div className='oneA'><hr></hr></div>
      </div>


      <div className="footer">
        <img src={logo} className='logo'></img>
        <h6 className='grey'>[본사] 경북 경주시 외동읍 제내2공단길 94 한진피엘 ㈜ | Tel 031-420-3200 | Fax 031-420-3120
        </h6>
        <h6 className='grey'>COPYRIGHT © 2021 <span className='logocolor3'>HANJIN PL.</span> ALL RIGHT RESERVED.
        </h6>
      </div>
    </div>

      );
}

export default ESG경영;
