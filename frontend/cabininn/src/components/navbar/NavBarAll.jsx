import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Login from "../../pages/login/Login";
import {
    NavLink,
} from 'react-router-dom'

const NavBarAll = ({setModalShow, modalShow}) => {



  return (
    <>
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <h2>CabinInn</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/results" variant="secondary" className="btn btn-secondary mx-2">
              Buscar Hoteles
            </NavLink>
            <NavLink to="/pays" variant="secondary" className="btn btn-secondary mx-2">
              Pagos
            </NavLink>
            <Button className="btn-secondary mx-2" onClick={()=>setModalShow(true)}>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={modalShow}
        onHide={() => setModalShow(false)}/>    
    </div>
    </>
  );
};

export default NavBarAll;
