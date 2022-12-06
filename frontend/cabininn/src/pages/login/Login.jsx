import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import google from "../../images/google_buscador.png";
// import facebook from "../../images/facebook-logo-2019.png";
import "./login.css";
import axios from "axios";
import Swal from "sweetalert2";

const Login = ({ show, onHide, setlog, log }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  // const [token, settoken] = useState();

  const logeo = (e) => {
    e.preventDefault();

    axios
      .post("https://cabininn-backend-production.up.railway.app/auth/login", {
        username: email,
        password: pass,
      })
      .then((res) => {
        Swal.fire("Bienvenido!", "Inicio de sesion exitoso", "success");
        onHide();
        setlog(true);
        localStorage.setItem('session', true)
        localStorage.setItem('dataSession',JSON.stringify({userId: res.data.id, email: res.data.username}))        
       
      })
      .catch((error) => {
        Swal.fire("Error!", "Datos erroneos, vuelve a intentarlo", "error");
        setemail("");
        setpass("");
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center w-100"
          >
            <p className="registro-title"> Iniciar Sesión </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <Form onSubmit={logeo}>
            <Form.Group
              className="mb-5 d-flex justify-content-center"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Ingrese su e-mail"
                className="text-center w-75 email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                autoComplete="on"
              />
            </Form.Group>

            <Form.Group
              className="mb-5 d-flex justify-content-center"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="text-center w-75 pass email"
                onChange={(e) => setpass(e.target.value)}
                value={pass}
                autoComplete="on"
              />
            </Form.Group>

            <Form.Group
              className="mt-5 mb-3 d-flex justify-content-center"
              controlId="formBasicCheckbox"
            >
              <Button type="submit" className="mt-3 buton  buton-active">
                Ingresar
              </Button>
            </Form.Group>
          </Form>
          {/* <p>o ingresa con</p>

          <hr />
          <div className="d-flex justify-content-center gap-3">
            <Button className="px-2" variant="light">
              <img className="pe-2" src={google} width="64px" alt="" />
              Continuar con google
            </Button>
            <Button className="px-2" variant="light">
              <img className="pe-2" src={facebook} width="64px" alt="" />
              Continuar con Facebook
            </Button>
          </div> */}
        </Modal.Body>
        <Modal.Footer className="w-100 d-flex justify-content-center">
          <div className="">
            <p className="text-center ytenes mb-3">¿No tenes cuenta?</p>
            <Button className="buton mb-2" onClick={onHide}>
              Registrarse
            </Button>
          </div>
          {/* <button onClick={props.onHide}>close</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
