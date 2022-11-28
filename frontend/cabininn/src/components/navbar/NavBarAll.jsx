import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Login from "../../pages/login/Login";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoSVG from "./logo.svg";
import InputSearch from "../header/InputSearch";

const NavBarAll = ({ setModalShow, modalShow }) => {
  const [colore, setcolore] = useState(false);

  const changecolor = () => {
    setcolore(true);
  };

window.addEventListener('scroll', changecolor)

  return (
    <>
      <header className={colore ? 'bg-header' : ''}>
        <a className="ms-5" href="/">
          <img src={logoSVG} alt="" />
        </a>
        <nav className="me-5">
          <ul>
            <li>
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
              <a className="btn-search fs-2 ms-5" href="#">
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
