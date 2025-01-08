
import './main.css';
import Carousel from 'react-bootstrap/Carousel';
import civideo from './civideo.mp4';

export default function Main() {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item interval={30000} className='itemcA1'>

              <hr className='bar'></hr>
              <h1 className='MainTitle'><span className='logocolor2'> &nbsp; &nbsp; Welcome to</span>
              <span className='logocolor3'> HanjinPL</span></h1> 

         
            <video className='video' autoPlay muted>
              <source src={civideo} type="video/mp4"/>
            </video>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='itemcA'>
          <a href="#/회사소개/회사정보">
            <img className='navCarouselA' src="https://cdn.pixabay.com/photo/2020/04/17/20/25/road-5056788_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH2A'>회사소개</h3>
              <p className='CIP2A'>CEO 인사말, 기업정보, CI소개, 오시는길</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemcA'>
          <a href='#/esg/ESG경영'>
            <img className='navCarouselA' src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH1A'>ESG</h3>
              <p className='CIP1A'>ESG 경영</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemcA'>
          <a href="#/인재채용/CareerInfo">
            <img className='navCarouselA' src="https://cdn.pixabay.com/photo/2024/06/09/14/44/businessman-8818855_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH1A'>인재채용</h3>
              <p className='CIP1A'>CAREER INFO, Q&A, 채용링크</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemcA'>
          <a href="#/사업장/관계사">
            <img className='navCarouselA' src="https://cdn.pixabay.com/photo/2013/06/10/09/23/desert-123978_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH2A'>사업장</h3>
              <p className='CIP2A'>관계사</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemcA'>
          <a href="#/제품/제조공정">
            <img className='navCarouselA' src="https://cdn.pixabay.com/photo/2018/08/31/18/51/mercedes-benz-3645351_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH2A'>제품</h3>
              <p className='CIP2A'>제조공정, 설비현황, 제품소개</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>

    
  );
}
