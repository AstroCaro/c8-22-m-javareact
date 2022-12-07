import React from "react";
import BtnWatsap from "./BtnWatsap";
import '../navbar/Navbar.css'
import "./header.css";
import backgroundImg from './backgroundImg.jpg'
import Card from "react-bootstrap/Card";

const HeaderAll = () => {
  return (
    <>
     <form action="" className="form-input d-sm-none">
           <input
            list="countries"
            type="text"
            // onChange={(e) => setsearching(e.target.value)}
            // value={searching}
            className="searchBox px-3 w-100 mx-3 "
            placeholder=" Buscar"
          />
          </form>
      <Card className="heroCard bg-dark">
        {/* <Card.Img 
        src={backgroundImg}
         className="heroImg" 
         alt="Card image" /> */}
        
        <Card.ImgOverlay>
          <Card.Title className="heroTitle flex text-center py-5 text-white">
            Encontra tu alojamiento ideal
          </Card.Title>
        </Card.ImgOverlay>
        
      </Card>
      <BtnWatsap />
    </>
  );
};

export default HeaderAll;
