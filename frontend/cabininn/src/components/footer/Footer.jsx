import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import fb from '../../images/facebook-logo-2019.png'
import inst from '../../images/instagram.png'
import wsp from '../../images/whatsapp.png'
import './footer.css'
 const Footer = () => {
  return (
    // <CDBFooter className="shadow static-bottom">
    //   <CDBBox
    //     display="flex"
    //     justifyContent="between"
    //     alignItems="center"
    //     className="mx-auto py-4 flex-wrap"
    //     style={{ width: '80%' }}
    //   >
    //     <CDBBox display="flex" alignItems="center">
    //       <a href="/" className="d-flex align-items-center p-0 text-dark">
    //         <span className="ml-4 h5 mb-0 font-weight-bold ">CabinInn</span>
    //       </a>
    //     </CDBBox>
    //     <CDBBox>
    //       <small className="ml-2">&copy; CabinInn, 2022. All rights reserved.</small>
    //     </CDBBox>
    //     <CDBBox display="flex py-3">
    //       <CDBBtn flat color="dark" className="p-2">
    //         <CDBIcon fab icon="facebook-f" />
    //       </CDBBtn>
    //       <CDBBtn flat color="dark" className="mx-3 p-2">
    //         <CDBIcon fab icon="whatsapp" />
    //       </CDBBtn>
    //       <CDBBtn flat color="dark" className="p-2">
    //         <CDBIcon fab icon="instagram" />
    //       </CDBBtn>
    //     </CDBBox>
    //   </CDBBox>
    // </CDBFooter>
    <div className='footer'>
      
      <p className='der'>© Todos los derechos reservados</p>
      <div>
       <img className='ico-redes mx-4' src={fb} alt="" />
       <img className='ico-redes mx-4' src={inst} alt="" />
       <img className='ico-redes mx-4' src={wsp} alt="" />
      </div>
    </div>
  );
};

export default Footer