import Carousel from 'react-bootstrap/Carousel';
import Image from '../pages/logo.png';
import './NavCarousel.css';

export default function NavCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={5000} className='itemc'>
          <a href="#/회사소개/회사정보">
            <img className='navCarousel' src="https://cdn.pixabay.com/photo/2020/04/17/20/25/road-5056788_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH'>회사소개</h3>
              <p className='CIP'>CEO 인사말, 기업정보, CI소개, 오시는길</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemc'>
          <a href='#/esg/ESG경영'>
            <img className='navCarousel' src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH'>ESG</h3>
              <p className='CIP'>ESG 경영</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemc'>
          <a href="#/회사소개/회사정보">
            <img className='navCarousel' src="https://cdn.pixabay.com/photo/2024/06/09/14/44/businessman-8818855_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH'>인재채용</h3>
              <p className='CIP'>CAREER INFO, Q&A, 채용링크</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemc'>
          <a href="#/회사소개/회사정보">
            <img className='navCarousel' src="https://cdn.pixabay.com/photo/2013/06/10/09/23/desert-123978_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH'>사업장</h3>
              <p className='CIP'>관계사</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item interval={5000} className='itemc'>
          <a href="#/회사소개/회사정보">
            <img className='navCarousel' src="https://cdn.pixabay.com/photo/2018/08/31/18/51/mercedes-benz-3645351_1280.jpg"></img>
            <Carousel.Caption>
              <h3 className='CIH'>제품</h3>
              <p className='CIP'>제조공정, 설비현황, 제품소개</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
