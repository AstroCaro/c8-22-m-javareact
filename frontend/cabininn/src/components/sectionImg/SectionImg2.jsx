import Carousel from "react-bootstrap/Carousel";
import "./sectionStyles.css";
import image1 from '../../images/Group8.jpg'
import image2 from '../../images/Group9.jpg'
import image3 from '../../images/Group10.jpg'
import image4 from '../../images/Group11.jpg'


function ImgOverlayExample() {
  return (
    <>
      <div className="container">
        <h2 className="mainTitles text-center mt-5 mb-2 ">
          ¿Todavia no te decidiste?
        </h2>
        <p className="subTitles mb-4">Mirá los destinos exclusivos para vos</p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImgOverlayExample;
