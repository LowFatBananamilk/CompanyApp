import React from 'react';
import '../Font&Color.css';
import '../thumbnail&details.css';
import './Talent.css'
import skill from '../../skill.png'
import skill1 from '../../skill1.svg'
import creativity from '../../creativity.svg'
import accountability from '../../accountability.svg'
import teamwork from '../../teamwork.svg'
import customer from '../../customer.svg'
import passion from '../../passion.svg'

function Talent() {
  return (
  <div>
    <div className='thumbnail1'>
    <h1 className='thumbnailtext'>Talent</h1>
    </div>
    <h1 className="header">Talent</h1> 
    <div className='start'> 
    </div>
  
    <div className='goalsB'>
    </div>
    <img src={skill1} className="goalB"></img>
    <h1 className='yearB'>한진PL 인재상</h1>
    <div className='goaldetailsB'>
      <table>
        <tr className='tablerB'>
          <td className='tabledB'><img src={passion} className='iconsB'></img></td>
          <td className='tabledB'>
            <h1 className='detail1B'>
            열정</h1>
            <h3 className='detail1C'>본인의 업무와 조직의 성공에 대해 열렬한 애정을 가지고 능동적으로 일하는 인재</h3>
          </td>
        </tr>

        <tr className='tablerB'>
          <td className='tabledB'><img src={creativity} className='iconsB'></img></td>
          <td className='tabledB'>
            <h1 className='detail1B'>창의와 혁신</h1>
            <h3 className='detail1C'>창의적인 시각으로 조직의 경쟁력을 높일 수 있는 혁신을 제안하고 실행하는 인재</h3>
          </td>
        </tr>

        <tr className='tablerB'>
          <td className='tabledB'><img src={teamwork} className='iconsB'></img></td>
          <td className='tabledB'>
            <h1 className='detail1B'>팀워크</h1>
            <h3 className='detail1C'>조직 공통의 목표달성을 위해 도움을 주고 협력을 이끌어내는 인재</h3>
          </td>
        </tr>

        <tr className='tablerB'>
          <td className='tabledB'><img src={accountability} className='iconsB'></img></td>
          <td className='tabledB'>
            <h1 className='detail1B'>책임감</h1>
            <h3 className='detail1C'>본인의 업무를 끝까지 완수해내며 그 결과를 책임지는 인재</h3>
          </td>
        </tr>

        <tr className='tablerB'>
          <td className='tabledB'><img src={customer} className='iconsB'></img></td>
          <td className='tabledB'>
            <h1 className='detail1B'>고객지향</h1>
            <h3 className='detail1C'>고객의 입장에서 진정성있는 태도로 Needs 그 이상의 가치를 제공하는 인재</h3>
          </td>
        </tr>

      </table>
    </div>
  </div>
  );
}

export default Talent;
