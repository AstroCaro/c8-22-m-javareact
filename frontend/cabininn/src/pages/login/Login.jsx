import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google from '../../images/google_buscador.png'
import facebook from '../../images/facebook-logo-2019.png'

const Login = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center w-100"
          >
            Iniciar Sesión o Registrarse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 d-flex justify-content-center"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="Ingrese su e-mail"
                className="text-center w-75"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-center"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="text-center w-75"
                
              />
              
            </Form.Group>
            
            <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
            <Button variant="danger" type="submit" className="w-50">
              Continuar
            </Button>
            </Form.Group>
        </Form>
        <hr />
        <div className="d-flex justify-content-center gap-3">
            
            <Button className="px-2" variant="light"><img className="pe-2" src={google} width='64px' alt="" />
            Continuar con google
            </Button>
            <Button className="px-2" variant="light"><img className="pe-2" src={facebook} width='64px' alt="" />
            Continuar con Facebook
            </Button>
            
        </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <button onClick={props.onHide}>close</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
