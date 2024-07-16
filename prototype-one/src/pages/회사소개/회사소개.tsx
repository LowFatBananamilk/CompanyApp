import React from 'react';
import '../Font&Color.css'
import './회사소개.css'; 
import company from '../../company.svg';
import money from '../../money.svg';
import worker from '../../worker.svg';

function 회사소개() {
  return (
  <div>
    <div className="photodiv bg5">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg" className='mainimg'></img>
    </div>

    <div className="intro">
      <h1 className="bold logocolor3">HANJIN PL</h1>
      <h4>한진PL은 빛입니다.</h4>
      <h6>뭐시기 뭐시기 했습니다.</h6>
      <h6 className='bold'>중요!!</h6>
      <h6 className='logocolor3'>파랑!!</h6>
    </div>
    
    <div className="CEO bg1">
      <h1 className='bold logocolor3'>CEO 인사말</h1>
      <h4>한진PL은 빛입니다.</h4>
      <h6>뭐시기 뭐시기 했습니다.</h6>
      <h6 className='bold'>중요!!</h6>
      <h6 className='logocolor3'>파랑!!</h6>
    </div>

    <div className="info">
      <table>
        <tr>
          <th>설립일</th>
          <th>매출액</th>
          <th>종업원수</th>
        </tr>
        <tr>
          <td>
            <img src={company} className='icon'></img>
          </td>
          <td>
            <img src={money} className='icon'></img>
          </td>
          <td>
            <img src={worker} className='icon'></img>
          </td>
        </tr>
        <tr>
          <td>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
          <td>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
          <td>
            <h5>부제목</h5>
            <h6>부가설명</h6>
          </td>
        </tr>
      </table>
    </div>

  </div>

  );
}

export default 회사소개;
