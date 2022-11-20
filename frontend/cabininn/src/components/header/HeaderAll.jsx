import React from "react";
import BtnWatsap from "./BtnWatsap";
import InputSearch from "./InputSearch";
import "./header.css";
import Card from "react-bootstrap/Card";



const HeaderAll = () => {
  return (
    <>
      <div className="header-container">
     
        <Card className="bg-dark text-white">
          <Card.Img
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="w-50 ps-5"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="my-5 py-5 text-center font-monospace">
              Card title 1
            </Card.Title>
            <Card.Text className="text-center font-monospace">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <InputSearch />
      {/* </Container> */}
      
      <BtnWatsap />
      </div>
      
    </>
  );
};

export default HeaderAll;
