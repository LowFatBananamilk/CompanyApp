import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import './HRsystem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 근무제도 from '../../근무제도.svg'
import vacation from '../../vacation.svg'
import 경조사 from '../../경조사.svg'
import healthcare from '../../healthcare.svg'
import home from '../../home.svg'
import amenities from '../../amenities.svg'
import teamwork from '../../teamwork.svg'
import skill1 from '../../skill1.svg'
import man from '../../man.svg'


function HRsystem() {
  return (
  <div>
    <div className='thumbnail1'>
    <h1 className='thumbnailtext'>HR System</h1>
    </div>
    <h1 className="header">HR System</h1> 
    <div className='start'> 
    </div>
  
    <h1 className='header2'>평가제도</h1>
    <div className='cardtab33'>
    <div className='bgcardB'>
    <hr></hr>
    <Button className='button33'>
      <Card className='card33A'>
        <Card.Body>
          <img src={teamwork} className='card33img'></img>
          <Card.Title className='card33title'>조직평가</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    <Button className='button33'>
      <Card className='card33B'>
        <Card.Body>
          <img src={man} className='card33img'></img>
          <Card.Title className='card33title'>개인평가</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    <Button className='button33'>
      <Card className='card33A'>
        <Card.Body>
          <img src={skill1} className='card33img'></img>
          <Card.Title className='card33title'>역량평가</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    <hr></hr>
    </div>
    </div>

    <h1 className='header2'>복리후생</h1>
    <div className='cardtab33'>
    <hr></hr>
    <Button className='button33'>
      <Card className='card33B'>
        <Card.Body>
          <img src={근무제도} className='card33img'></img>
          <Card.Title className='card33title'>유연한 근무제도</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    
    <Button className='button33'>
      <Card className='card33A'>
        <Card.Body>
          <img src={경조사} className='card33img'></img>  
          <Card.Title className='card33title'>경조사 지원</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    
    <Button className='button33'>
      <Card className='card33B'>
        <Card.Body>
          <img src={vacation} className='card33img'></img>
          <Card.Title className='card33title'>휴가제도</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    
    <Button className='button33'>
      <Card className='card33A'>
        <Card.Body>
          <img src={home} className='card33img'></img>
          <Card.Title className='card33title'>주거 안정 지원</Card.Title>
        </Card.Body>
      </Card>
    </Button>

    <Button className='button33'>
      <Card className='card33B'>
        <Card.Body>
          <img src={healthcare} className='card33img'></img>
          <Card.Title className='card33title'>건강검진 및 의료비 지원</Card.Title>
        </Card.Body>
      </Card>
    </Button>

    <Button className='button33'>
      <Card className='card33A'>
        <Card.Body>
          <img src={amenities} className='card33img'></img>
          <Card.Title className='card33title'>각종 편의 제공</Card.Title>
        </Card.Body>
      </Card>
    </Button>
    <hr></hr>
    </div>
  </div>


  );
}

export default HRsystem;
