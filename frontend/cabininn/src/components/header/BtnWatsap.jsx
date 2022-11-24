import React from "react";
import './header.css'

const BtnWatsap = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=+51930428602"
        className="btn-wsp">
        <i className="fa fa-whatsapp icono"></i>
      </a>
    </>
  );
};

export default BtnWatsap;
