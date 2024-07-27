import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';
import './CareerInfo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 개발팀 from './개발팀.svg'
import 생산팀 from './생산팀.svg'
import 관리팀 from './관리팀.svg'
import 구매팀 from './구매팀.svg'
import 원가팀 from './원가팀.svg'
import 품질팀 from './품질팀.svg'


function CareerInfo() {
  return (
  <div>
    <div>
    <h1 className='header1'>Career INFO</h1>
    <div className='start'></div>
    </div>

    <div className='main'>
    <h1 className='header2'>직무소개</h1>
    <hr></hr>
    <br></br>

      <div className='oneA'>
      <div className='threebythreeA'>
      <Card className='card3by3special'>
          <img src={구매팀} className='threebythreeiconss'></img>
            <Card.Body>
            <Card.Title className='threecardtitles'>구매팀</Card.Title>
            <Card.Text className='threecardtexts'>
            제품 생산과 회사운영에 필요한 원자재 및 부품 등을 적절한 가격으로 공급할 수 있도록 하며,
            최적의 품질과 납기능력을 보유한 협력업체와 상생협력하여 동반성장을 추진하는 직무를 수행
            </Card.Text>
            </Card.Body>
          </Card>
      </div>

      <div className='threebythreeB'>
      <Accordion defaultActiveKey="0" className='accordian3by3'>
      <Accordion.Item eventKey="1"  className='accordian3by3item'>
        <Accordion.Header className='accordian3by3head'>
          <Card className='card3by3accordian'>
            <img src={개발팀} className='threebythreeicons'></img>
            <Card.Body>
            <Card.Title className='threecardtitle'>개발팀</Card.Title>
            <Card.Text className='threecardtext'>
            기업경쟁력의 원천이 되는 제품경쟁력 확보를 위해 핵심기술의 개발과 연구를 담당하는 직무입니다.
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Card className='card3by3'>
            <Card.Body>
            <Card.Title className='threecardtitle'>선행검증팀</Card.Title>
            <Card.Text className='threecardtext'>
            제품 개발 단계에서 성능예측 및 조기 품질확보를 목표로, 설계도면 출도 이전에 제품의 조립공차, 구조,
            사출성형 등 전산해석을 활용하여 사전검증을 수행
            </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card3by3'>
            <Card.Body>
            <Card.Title className='threecardtitle'>개발팀</Card.Title>
            <Card.Text className='threecardtext'>
            신차 개발단계에 부품개발과 품질확보를 위해 공법/소재의 양산 타당성 검토와 금형 개발 및 개선업무를 담당,
            양산 품질 조기 안정화를 목표로 4M구축, 품질 안정화 지원활동을 수행
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>

      <div className='threebythreeC'>
          <Card className='card3by3special'>
            <img src={원가팀} className='threebythreeiconss'></img>
            <Card.Body>
            <Card.Title className='threecardtitle'>원가팀</Card.Title>
            <Card.Text className='threecardtext'>
            고객사로부터 신규/후속 차종의 제품 수주 및 가격결정업무를 담당하는 부서입니다. 회사의 지속적인 성장과 수익성 확보, 매출확대를 위해 전략적인 입찰을 고객사 및 협력업체와 협상하고 결정합니다.
            </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </div>

    <div className='oneA'>
      <div className='threebythreeA'>
      <Accordion defaultActiveKey="0" className='accordian3by3'>
      <Accordion.Item eventKey="1"  className='accordian3by3item'>
        <Accordion.Header className='accordian3by3head'>
          <Card className='card3by3accordian'>
          <img src={관리팀} className='threebythreeicons'></img>
            <Card.Body>
            <Card.Title className='threecardtitle'>관리팀</Card.Title>
            <Card.Text className='threecardtext'>
            회사 전반에 걸쳐 사내 제반 업무에 대한 관리 및 지원의 기능을 수행하는 직무입니다.
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>

      <div className='threebythreeB'>
      <Accordion defaultActiveKey="0" className='accordian3by3'>
      <Accordion.Item eventKey="1"  className='accordian3by3item'>
        <Accordion.Header className='accordian3by3head'>
          <Card className='card3by3accordian'>
          <img src={품질팀} className='threebythreeicons'></img>
            <Card.Body>
            <Card.Title className='threecardtitle'>품질팀</Card.Title>
            <Card.Text className='threecardtext'>
            고객이 만족하는 제품을 공급하기 위해 품질경영시스템을 운영, 설계 및 개발단계에서 양산까지 보증품질에 대해
            체계적인 관리를 이행하는 직무 입니다. 
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>

      <div className='threebythreeC'>
      <Accordion defaultActiveKey="0" className='accordian3by3'>
      <Accordion.Item eventKey="1"  className='accordian3by3item'>
        <Accordion.Header className='accordian3by3head'>
          <Card className='card3by3accordian'>
          <img src={생산팀} className='threebythreeicons'></img>
            <Card.Body>
            <Card.Title className='threecardtitle'>생산팀</Card.Title>
            <Card.Text className='threecardtext'>
            고객이 만족하는 제품을 공급하기 위해 품질경영시스템을 운영, 설계 및 개발단계에서 양산까지 보증품질에 대해
            체계적인 관리를 이행하는 직무 입니다. 
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text  className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card3by3'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='threecardtitle'>Card Title</Card.Title>
            <Card.Text className='threecardtext'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </div>
    
    </div>

  </div>
  );
}

export default CareerInfo;
