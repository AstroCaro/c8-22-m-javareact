import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBarAll = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2>CabinInn</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="secondary" className="mx-3">
              Boton
            </Button>
            <Button variant="secondary">Boton</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarAll;
