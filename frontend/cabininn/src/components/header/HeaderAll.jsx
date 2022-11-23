import React from "react";
import BtnWatsap from "./BtnWatsap";
import InputSearch from "./InputSearch";
import "./header.css";
import Card from "react-bootstrap/Card";

const HeaderAll = () => {
  return (
    <>     
        <Card className="heroCard bg-dark">
          <Card.Img
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="heroImg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="heroTitle flex text-center py-5 text-white">
              Encontra tu alojamiento ideal
            </Card.Title>
          </Card.ImgOverlay>
        <InputSearch />
        </Card>
      <BtnWatsap />      
    </>
  );
};

export default HeaderAll;
