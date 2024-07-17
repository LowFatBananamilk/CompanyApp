import React from 'react';
import '../Font&Color.css'
import '../thumbnail&details.css'
import './회사소개.css'; 
import company from '../../company.svg';
import money from '../../money.svg';
import worker from '../../worker.svg';
import car from '../../car.svg';

function 회사소개() {
  return (
  <div>
    <div className='thumbnail1'>
      <h1 className='thumbnailtext'>회사정보</h1>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 className="bold logocolor2 center big">회사소개</h1>
    <div className='start'>
    </div>
    
    <div className="photodiv bg5">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg" className='mainimg'></img>
    </div>

    <div className="intro">
      <h2 className="bold logocolor3">HANJIN PL</h2>
      <hr></hr>
      <h4>한진PL은 빛입니다.</h4>
      <h6>설명</h6>
      <h6 className='bold'>중요!!</h6>
      <h6 className='logocolor3'>파랑!!</h6>
      <hr></hr>
    </div>
    

    <div className="CEO">
      <h2 className='bold logocolor3'>CEO 인사말</h2>
      <hr></hr>
      <h4>한진PL은 빛입니다.</h4>
      <h6>뭐시기 뭐시기 했습니다.</h6>
      <h6 className='bold'>중요!!</h6>
      <h6 className='logocolor3'>파랑!!</h6>
    </div>

    <div className="info">
      <h2 className="bold logocolor3">기업정보</h2>
      <table className="table1">
        <tr className='tr1'>
          <th className='th1'>설립일</th>
          <th className='th1'>매출액</th>
          <th className='th1'>종업원수</th>
        </tr>
        <tr className='th1'>
          <td className='th1'>
            <img src={company} className='icon'></img>
          </td>
          <td className='th1'>
            <img src={money} className='icon'></img>
          </td>
          <td className='th1'>
            <img src={worker} className='icon'></img>
          </td>
        </tr>
        <tr className='th1'>
          <td className='th1'>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
          <td className='th1'>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
          <td className='th1'>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
        </tr>
      </table>
    </div>
    
    <div className='info2'>
      <table className="table2">
      <tr className='tr2'>
          <th className='th2'>회사명</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
        <tr className='tr2'>
          <th className='th2'>대표이사</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
        <tr className='tr2'>
          <th className='th2'>법인출범</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
        <tr className='tr2'>
          <th className='th2'>주생산품</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
        <tr className='tr2'>
          <th className='th2'>주요사업</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
        <tr className='tr2'>
          <th className='th2'>주소</th>
          <td className='td2'>이름 및 설명</td>
        </tr>
      </table>
    </div>

    <div className='others'>
    <h2 className="bold logocolor3">주관계사</h2>
    <hr></hr>
    <img src={car} className='companies'></img>
    <img src={car} className='companies'></img>
    <img src={car} className='companies'></img>
    <img src={car} className='companies'></img>
    <h5 className="bold">현대, 뭐시기, 뭐시기</h5>
    </div>
  </div>

  );
}

export default 회사소개;
