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
import 생산 from './생산.svg'
import 생산관리 from './생산관리.svg'
import 생산기술 from './생산기술.svg'
import 선행검증 from './선행검증.svg'
import 설비관리 from './설비관리.svg'
import 시험 from './시험.svg'
import 신차품질 from './신차품질.svg'
import 안전보건환경 from './안전보건환경.svg'
import 양산품질 from './양산품질.svg'
import 재경 from './재경.svg'
import 품질경영 from './품질경영.svg'
import 인사노무 from './인사노무.svg'
import logo from '../logo.png'

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

        <Card className='accordioncardS'>
          <Card.Body className='cardbody'>
              <img src={구매팀} className='accordionicon'></img>
              <Card.Title className='actitle'>구매팀</Card.Title>
              <Card.Text className='actext'>
              제품 생산과 회사운영에 필요한 원자재 및 부품 등을 적절한 가격으로 공급할 수 있도록 하며,
              최적의 품질과 납기능력을 보유한 협력업체와 상생협력하여 동반성장을 추진하는 직무를 수행              
              </Card.Text>
            </Card.Body>
        </Card>

        <Card className='accordioncardS'>
          <Card.Body className='cardbody'>
              <img src={원가팀} className='accordionicon'></img>
              <Card.Title className='actitle'>원가팀</Card.Title>
              <Card.Text className='actext'>
              고객사로부터 신규/후속 차종의 제품 수주 및 가격결정업무를 담당하는 부서입니다. 회사의 지속적인 성장과 수익성 확보, 매출확대를 위해 전략적인 입찰을 고객사 및 협력업체와 협상하고 결정합니다.
              </Card.Text>
            </Card.Body>
        </Card>

        <Accordion className='accordion'>
          <Accordion.Item eventKey="0" className='accordionitem'>
            <Accordion.Header>
              <Card className='accordioncard'>
                <Card.Body>
                  <img src={개발팀} className='accordionicon'></img>
                  <Card.Title className='actitle'>개발팀</Card.Title>
                  <Card.Text className='actext'>
                  기업경쟁력의 원천이 되는 제품경쟁력 확보를 위해 핵심기술의 개발과 연구를 담당하는 직무입니다.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Header>
            <Accordion.Body>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={선행검증} className='accordionicon'></img>
                  <Card.Title className='actitle'>선행검증</Card.Title>
                  <Card.Text className='actext'>
                  제품 개발 단계에서 성능예측 및 조기 품질확보를 목표로, 설계도면 출도 이전에 제품의 조립공차, 구조,
                  사출성형 등 전산해석을 활용하여 사전검증을 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={개발팀} className='accordionicon'></img>
                  <Card.Title className='actitle'>개발</Card.Title>
                  <Card.Text className='actext'>
                  신차 개발단계에 부품개발과 품질확보를 위해 공법/소재의 양산 타당성 검토와 금형 개발 및 개선업무를 담당,
                  양산 품질 조기 안정화를 목표로 4M구축, 품질 안정화 지원활동을 수행
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='accordion'>
          <Accordion.Item eventKey="0" className='accordionitem'>
            <Accordion.Header>
              <Card className='accordioncard'>
                <Card.Body className='cardbody'>
                  <img src={관리팀} className='accordionicon'></img>
                  <Card.Title className='actitle'>관리팀</Card.Title>
                  <Card.Text className='actext'>
                  회사 전반에 걸쳐 사내 제반 업무에 대한 관리 및 지원의 기능을 수행하는 직무입니다.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Header>
            <Accordion.Body>
              <Card className='accordioncardB'>
                <Card.Body>
                <img src={인사노무} className='accordionicon'></img>
                  <Card.Title className='actitle'>인사/노무</Card.Title>
                  <Card.Text className='actext'>
                  회사의 경영이념을 바탕으로 효율적인 인사제도 및 교육훈련을 기획/운영 업무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={재경} className='accordionicon'></img>
                  <Card.Title className='actitle'>재경</Card.Title>
                  <Card.Text className='actext'>
                  국제회계기준 및 각종 법령에 적합한 회계·세무 처리 업무와 자금의 효율적인 계획·운용·조달 업무를 통해
                  회계·재무데이터를 산출·가공함으로써, 회사의 의사결정이 보다 효과적·효율적이 되도록 하며,
                  개정 및 관련 사항을 적시에 공시하는 업무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={안전보건환경} className='accordionicon'></img>
                  <Card.Title className='actitle'>안전/보건/환경</Card.Title>
                  <Card.Text className='actext'>
                  안전하고 건강한 사업장 운영을 위한 중대재해 예방, 안전점검 및 개선, 안전보건 교육,
                  작업환경측정 등을 수행, 환경 보전을 위한 폐기물 처리관리, 위험물 관리,
                  대기오염 방지시설 관리 업무와 화재예방을 위한 소방시설물 관리 직무도 수행
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  
        <Accordion className='accordion'>
          <Accordion.Item eventKey="0" className='accordionitem'>
            <Accordion.Header>
              <Card className='accordioncard'>
                <Card.Body>
                  <img src={품질팀} className='accordionicon'></img>
                  <Card.Title className='actitle'>품질팀</Card.Title>
                  <Card.Text className='actext'>
                  고객이 만족하는 제품을 공급하기 위해 품질경영시스템을 운영, 설계 및 개발단계에서 양산까지 보증품질에 대해 체계적인 관리를 이행하는 직무 입니다.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Header>
            <Accordion.Body>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={품질경영} className='accordionicon'></img>
                  <Card.Title className='actitle'>품질경영</Card.Title>
                  <Card.Text className='actext'>
                  품질기획 및 자동차 산업분야의 품질경영시스템(IARF16949)의 요구사항에 따른 프로세스를 수립,
                  관련 조직과 협업을 통하여 안정적인 품질경영시스템을 유지하고 개선하는 업무와 자주개선 활동을 통해
                  개선마인드 형성 및 수익성을 향상시키는 업무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={신차품질} className='accordionicon'></img>
                  <Card.Title className='actitle'>신차품질</Card.Title>
                  <Card.Text className='actext'>
                  양산 전 품질활동으로 신차 개발 단계 품질확보부터 신차부품 품질 확보까지 신차의 개발단계에서
                  전반적인 품질 개선 및 검증 활동을 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={양산품질} className='accordionicon'></img>
                  <Card.Title className='actitle'>양산품질</Card.Title>
                  <Card.Text className='actext'>
                  현재 생산하고 있는 제품의 전 제조과정에 걸친 품질관리 활동을 통하여 양질의 제품을 적기에 공급,
                  고객에 인도 될 수 있는 직무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={시험} className='accordionicon'></img>
                  <Card.Title className='actitle'>시험</Card.Title>
                  <Card.Text className='actext'>
                  개발 및 생산품 성능 및 내구성을 평가하여 고객의 품질 니즈 충족을 위한 직무를 수행
                  시험 영역은 환경/법규/물성 외에도 다양한 항목이 있으며, 이러한 평가를 위해 분석기와 시험기 등 다양한 장비를 운영
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>



        <Accordion className='accordion'>
          <Accordion.Item eventKey="0" className='accordionitem'>
            <Accordion.Header>
              <Card className='accordioncard'>
                <Card.Body>
                  <img src={생산팀} className='accordionicon'></img>
                  <Card.Title className='actitle'>생산(영업)팀</Card.Title>
                  <Card.Text className='actext'>
                  고객이 만족하는 제품을 공급하기 위해 품질경영시스템을 운영, 설계 및 개발단계에서 양산까지 보증품질에 대해
                  체계적인 관리를 이행하는 직무 입니다.                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Header>
            <Accordion.Body>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={생산} className='accordionicon'></img>
                  <Card.Title className='actitle'>생산</Card.Title>
                  <Card.Text className='actext'>
                  생산업무는 4M (사람(Man), 설비(Machine), 자재(Material), 방법(Method))으로 제조현장을 운영하여 제품을 생산하는 직무로
                  생산량, 비가동, 불량, 생산시설 상태 등 생산 정보를 종합적으로 관리하여 제조 경쟁력 향상을 위한 개선 업무 직무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={생산관리} className='accordionicon'></img>
                  <Card.Title className='actitle'>생산관리</Card.Title>
                  <Card.Text className='actext'>
                  4M을 통한 효율적인 생산량을 관리하는 계획 업무 외에도 납기준수를 통한 고객만족 실현을 위한 A/S업무까지도 수행,
                  4M을 통한 효율적인 생산량을 관리하는 계획 업무 외에도 납기준수를 통한 고객만족 실현을 위한 A/S업무까지도 수행,
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={생산기술} className='accordionicon'></img>
                  <Card.Title className='actitle'>생산기술</Card.Title>
                  <Card.Text className='actext'>
                  4M (사람(Man), 설비(Machine), 자재(Material), 방법(Method))을 이용하여, 품질, 가격, 납기를 만족시키는 직무이며,
                  이러한 생산기술의 궁극적인 존재가치는 4M 구성 기술을 제공하여 기업의 수익성을 최적화,극대화 시키는 직무를 수행
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='accordioncardB'>
                <Card.Body>
                  <img src={설비관리} className='accordionicon'></img>
                  <Card.Title className='actitle'>설비관리</Card.Title>
                  <Card.Text className='actext'>
                  생산설비, Utility 설비, 시설물에 대한 유지보수, 개선의 기능을 수행하는 직무로 예방보전활동으로 최적의 설비 가동상태를
                  유지,관리하며 신설라인의 Utility 공사와 설비 조기 안정화 지원도 수행 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

    
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

export default CareerInfo;
