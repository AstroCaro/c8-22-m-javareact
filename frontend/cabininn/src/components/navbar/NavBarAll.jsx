import React, { useState } from "react";
import Login from "../../pages/login/Login";
import "./Navbar.css";
import logoSVG from "./logo.svg";
import { Link } from "react-router-dom";
import Register from "../../pages/login/Register";

const NavBarAll = ({
  setModalShow,
  modalShow,
  setsearching,
  search,
  searching,
  setmodalshow1,
  modalshow1,
  log,
  setlog,
  user,
  setuser,
}) => {
  const [colore, setcolore] = useState(false);

  const changecolor = () => {
    setcolore(true);
  };

  window.addEventListener("scroll", changecolor);

  return (
    <>
      <header className={colore ? "bg-header " : ""}>
        <a className="d-flex justify-content-center" href="/">
          <img src={logoSVG} alt="logo" className="logo" />
        </a>
        <p className="text-logo ms-3 mt-3">CABININN</p>
        <div className="container-searchbox">
          <input
            list="countries"
            type="text"
            onChange={(e) => setsearching(e.target.value)}
            value={searching}
            className="searchBox px-3"
            placeholder=" Buscar"
          />

          <datalist id="countries">
            <option value="Argentina"></option>
            <option value="Perú"></option>
            <option value="Uruguay"></option>
          </datalist>
        </div>
        <nav className="me-5">
          {log ? (
            <ul>
              <p className="user">Bienvenido, {user}</p>
              <li>
                <Link
                  className="btn-search fs-2 ms-5"
                  to={`./results/${searching}`}
                  onClick={search}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a
                  className="btn-reg rounded"
                  href="#"
                  onClick={() => setmodalshow1(true)}
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
                <Link
                  className="btn-search fs-2 ms-5"
                  to={`./results/${searching}`}
                  onClick={search}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <Login
        show={modalShow}
        setlog={() => setlog(true)}
        onHide={() => setModalShow(false)}
        setuser={setuser}
      />
      <Register show={modalshow1} onHide={() => setmodalshow1(false)} />
    </>
  );
};

export default NavBarAll;
