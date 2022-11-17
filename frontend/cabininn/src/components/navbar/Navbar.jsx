import React from 'react'
import { Navbar, Container } from "react-bootstrap";

function Nav() {
  return (
    <> 
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">CabinInn - Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Nav