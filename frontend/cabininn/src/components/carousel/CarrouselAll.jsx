import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
import { motion } from "framer-motion"
import image1 from '../../images/Barilocheuikit.jpg'
import image2 from '../../images/UshuaiaUIKIT.jpg'
import image3 from '../../images/CarlosPazuikit.jpg'

const images = [image1, image2, image3]

const CarrouselAll = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carrousel-section">
      <h2 className="text-center mt-5 mb-2 tittle-carr">
        Promociones Noviembre
      </h2>
      <p className="content-carr">
        ¿Quién dijo paz? Aprovechá estas ofertas y disfrutá un fin de semana en
        el bosque.
      </p>

     <motion.h1 animate={{x:200}}>Hola mundo</motion.h1>


    </div>
  );
};

export default CarrouselAll;
