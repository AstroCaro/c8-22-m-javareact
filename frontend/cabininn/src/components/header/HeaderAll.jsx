import React from "react";
import BtnWatsap from "./BtnWatsap";
import InputSearch from "./InputSearch";
import "./header.css";

const HeaderAll = () => {
  return (
    <>
      <div className="header-container">
       
      <InputSearch />
      <BtnWatsap />
      </div>
      
    </>
  );
};

export default HeaderAll;
