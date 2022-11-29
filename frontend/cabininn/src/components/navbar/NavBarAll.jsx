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
import { Link } from "react-router-dom";
const NavBarAll = ({ setModalShow, modalShow, setsearching, search, searching }) => {
  const [colore, setcolore] = useState(false);
  // const [searching, setsearching] = useState('');
  // const [capture, setcapture] = useState('Argentina')
  // const [hotels, sethotels] = useState([])


  const changecolor = () => {
    setcolore(true);
  };

window.addEventListener('scroll', changecolor)


// const search = (bycountry) => {
// setcapture(searching)
// axios.get('https://api.jsonbin.io/v3/b/638601547966e84526cf3d75')
// .then( res => sethotels(res.data.record))
// .catch( err => console.log(err))

// const hotelbyCountry = hotels.filter( hotel => hotel.address.countryName == 'Argentina' )

// }

  return (
    <>
      <header className={colore ? 'bg-header' : ''}>
        <a className="ms-5" href="/">
          <img src={logoSVG} alt="" />
        </a>
        <nav className="me-5">
          <ul>
            <li>
              <input type="text" onChange={(e)=>setsearching(e.target.value)} value={searching} />
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
              <Link className="btn-search fs-2 ms-5" to="./results" onClick={search}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default NavBarAll;
