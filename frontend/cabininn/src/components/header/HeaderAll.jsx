import React from "react";
import BtnWatsap from "./BtnWatsap";
import InputSearch from "./InputSearch";
import "./header.css";
import Card from "react-bootstrap/Card";


const HeaderAll = () => {
  return (
    <>     
        <Card className="heroCard bg-dark text-white">
          <Card.Img
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="w-100 "
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="heroMain flex text-center py-5">
              Encontra tu alojamiento ideal
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <InputSearch />
      {/* </Container> */}
      
      <BtnWatsap />      
    </>
  );
};

export default HeaderAll;
