import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import '../divs.css';

import Accordion from 'react-bootstrap/Accordion';

export default function QnA() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>채용관련 사항 및 지원서 접수는 어디서 하나요?</Accordion.Header>
        <Accordion.Body>
          보다 자세한 채용공고, 모집부문 및 자격요건, 지원서 접수 등은 홈페이지 내 채용 공고를 클릭하여 채용 홈페이지를 참조해주시길 바랍니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>한진피엘의 채용과정을 알고싶습니다.</Accordion.Header>
        <Accordion.Body>
          지원서 제출 -{'>'} 서류전형 -{'>'} 면접전형 -{'>'} 신체검사 -{'>'} 합격자 통보 -{'>'} 입사
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>채용관련 문의는 어떻게 하나요?</Accordion.Header>
        <Accordion.Body>
          채용 공고 내 인사담당자 E-mail로 문의하시면 됩니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>입사지원서 외 증빙서류는 언제 제출하면 되나요?</Accordion.Header>
        <Accordion.Body>
          면접합격자에 한해 증빙서류를 요청드립니다. 증빙서류는 입사 시 제출하시면 됩니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>한진피엘의 채용시기는 어떻게 되나요?</Accordion.Header>
        <Accordion.Body>
          모집분야에 따라 연중 수시채용을 진행합니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
