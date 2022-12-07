import React from 'react';
import './footer.css'
import { BiUser,BiLogIn } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
const FooterMobile = ({setModalShow, setmodalshow1}) => {

    let sessioIniciada = localStorage.getItem('session')
    let nombre = JSON.parse(localStorage.getItem('dataSession'))?.email.split('@')[0]

const logout = () => {
localStorage.removeItem('session')
localStorage.removeItem('dataSession')
window.location.assign('/');

}

    return (
        <div className='footerM-container'>
            {
               sessioIniciada ?
               <div className=' h-100 d-flex justify-content-center align-items-center px-4 gap-3'>
                <p className='m-0 tx fw-bold'>Bienvenido, {nombre}  </p> 
               <BiLogIn className='logout' onClick={logout}/>
               </div> 
               
               :
               <div className='h-100 d-flex justify-content-around align-items-center px-4'>
                <div className='d-flex flex-column align-items-center'>
               <BiUser className='icon' onClick={()=>setModalShow(true)}/>
               <p  className='m-0 fw-bold tx'>Ingresa</p>
               </div>
               <div className='d-flex flex-column align-items-center'>
               <FaRegAddressCard className='icon' onClick={()=>setmodalshow1(true)}/>
               <p  className='m-0 fw-bold tx'>Registro</p>
               </div>
               </div>
            }
           
        </div>
    );
};

export default FooterMobile;