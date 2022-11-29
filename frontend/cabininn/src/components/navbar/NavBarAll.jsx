import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Login from "../../pages/login/Login";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoSVG from "./logo.svg";
import InputSearch from "../header/InputSearch";
import axios from "axios";

const NavBarAll = ({ setModalShow, modalShow }) => {
  const [colore, setcolore] = useState(false);
  const [searching, setsearching] = useState('');
  const [capture, setcapture] = useState('Argentina')

  const changecolor = () => {
    setcolore(true);
  };

window.addEventListener('scroll', changecolor)
//  const data = JSON.stringify({countryName: capture })


// useEffect(()=> {

 
// },[])

const search = () => {
setcapture(searching)
// axios.post('https://pruebanocountry-production.up.railway.app/list/',
// {"countryName": "Peru"})
const config = {
  mode: 'no-cors',
  headers:{
    'Access-Control-Allow-Origin': '*',
       
  },
  withCredentials: true,
  credentials: 'same-origin',
};
axios.get('http://pruebanocountry-production.up.railway.app/hotels', config)

.then( res => console.log(res.data))
.catch( err => console.log(err))
}

  return (
    <>
      <header className={colore ? 'bg-header' : ''}>
        <a className="ms-5" href="/">
          <img src={logoSVG} alt="" />
        </a>
        <nav className="me-5">
          <ul>
            <li>
              <input type="text" onChange={(e)=>setsearching(e.target.value)} />
              <a
                className="btn-reg rounded"
                href="#"
                onClick={() => setModalShow(true)}
              >
                Registrarse
              </a>
            </li>
            <li>
              <a
                className="btn-reg rounded"
                href="#"
                onClick={() => setModalShow(true)}
              >
                Ingresar
              </a>
            </li>
            <li>
              <a className="btn-search fs-2 ms-5" href="#" onClick={search}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default NavBarAll;
