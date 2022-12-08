import React from "react";
import BtnWatsap from "./BtnWatsap";
import '../navbar/Navbar.css'
import "./header.css";
import backgroundImg from './backgroundImg.jpg'
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderAll = ({setsearching, searching, search}) => {

  
const data = (e) => {
  e.preventDefault()
  search()
  window.location.assign(`./results/${searching}`);
  
}

  return (
    <>

     <form onSubmit={ data}
      
       className="form-input d-sm-none">
        <AiOutlineSearch className="icon-s" />
           <input
            list="countries"
            type="text"
            onChange={(e) => setsearching(e.target.value)}
            value={searching}
            className="searchBox px-3 w-100 mx-3 ps-5 "
            placeholder="Busca acá tu alojamiento ideal"
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
