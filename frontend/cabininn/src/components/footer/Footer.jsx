import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import fb from '../../images/facebook-logo-2019.png'
import inst from '../../images/instagram.png'
import wsp from '../../images/whatsapp.png'
import './footer.css'
 const Footer = () => {
  return (
    <div className='footer'>     
      <p className='der mx-4'>© Todos los derechos reservados</p>
      <div>
       <img className='ico-redes mx-4' src={fb} alt="" />
       <img className='ico-redes mx-4' src={inst} alt="" />
       <img className='ico-redes mx-4' src={wsp} alt="" />
      </div>
    </div>
  );
};

export default Footer