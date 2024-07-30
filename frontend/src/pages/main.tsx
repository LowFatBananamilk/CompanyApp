import Carousel from 'react-bootstrap/Carousel';
import Image from './logo.png'

function Main() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <a href="#/회사소개/회사정보">
            <img
              src={Image}
              alt="Logo"
              style={{ height: "800px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Carousel.Caption>
              <h3>회사소개</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href='#/esg/ESG경영'>
            <img
              src={Image}
              alt="Logo"
              style={{ height: "800px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Carousel.Caption>
              <h3>ESG</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href='#/인재채용/careerinfo'>
            <img
              src={Image}
              alt="Logo"
              style={{ height: "800px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Carousel.Caption>
              <h3>인재채용</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href='#/사업장/관계사'>
            <img
              src={Image}
              alt="Logo"
              style={{ height: "800px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Carousel.Caption>
              <h3>사업장</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href='#/제품/제조공정'>
            <img
              src={Image}
              alt="Logo"
              style={{ height: "800px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Carousel.Caption>
              <h3>제품</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Main;
