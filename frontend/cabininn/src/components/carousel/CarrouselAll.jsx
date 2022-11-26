import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
import image1 from "../../images/Barilocheuikit.jpg";
import image2 from "../../images/UshuaiaUIKIT.jpg";
import image3 from "../../images/CarlosPazuikit.jpg";
import { Link } from "react-router-dom";

const images = [image1, image2, image3];

const CarrouselAll = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carrousel-section mb-5">
      <h2 className="mainTitles text-center mt-5 mb-2 ">
        Promociones Noviembre
      </h2>
      <p className="subTitles mb-4">
        ¿Quién dijo paz? Aprovechá estas ofertas y disfrutá un fin de semana en
        el bosque.
      </p>
      <div className="container-img d-flex justify-content-center gap-4">
        <button className="btn-slider fs-4"><i className="fa-solid fa-chevron-left"></i></button>
        {images.map((img, id) => (         
            <div key={id}>
            <Link to={`/reservation/${id+1}`}>
            <img className="item-img" src={img} alt="" />
            </Link>
            </div>
        ))}
        <button className="btn-slider fs-4"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default CarrouselAll;
