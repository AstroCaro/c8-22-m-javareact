import React, {useState } from "react";
import Login from "../../pages/login/Login";
import "./Navbar.css";
import logoSVG from "./logo.svg";
import { Link } from "react-router-dom";
const NavBarAll = ({
  setModalShow,
  modalShow,
  setsearching,
  search,
  searching,
}) => {
  const [colore, setcolore] = useState(false);

  const changecolor = () => {
    setcolore(true);
  };

  window.addEventListener("scroll", changecolor);

  return (
    <>
      <header className={colore ? "bg-header" : ""}>
        <a className="ms-5" href="/">
          <img src={logoSVG} alt="logo" className="logo" />
        </a>
        <nav className="me-5">
          <ul>
            <li>
              <input
                list="countries"
                type="text"
                onChange={(e) => setsearching(e.target.value)}
                value={searching}
                className="searchBox"
                placeholder=" Buscar"
              />
              <datalist id="countries">
                <option value="Argentina"></option>
                <option value="Perú"></option>
              </datalist>
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
              <Link
                className="btn-search fs-2 ms-5"
                to={`./results/${searching}`}
                onClick={search}
              >
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
