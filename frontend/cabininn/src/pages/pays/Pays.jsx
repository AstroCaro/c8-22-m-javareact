import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./pays.css";
import Swal from "sweetalert2";
function BasicExample({}) {

  
  
   const datospago = JSON.parse(localStorage.getItem('pay'))


   const confirmReserva = () => {

    Swal.fire(
      "Felicidades!",
      `se genero tu reserva con el codigo ${new Date()}`,
      "success"
    );

    setTimeout(()=>{
      localStorage.removeItem('pay')
      // localStorage.removeItem('dataSession')
      // localStorage.removeItem('session')
      window.location.assign('/')

    },3000)
   

   }
   
  return (
    <>
      <Container className="mt-3 marg">
        <h2 className="title">¡Estás a muy cerca de tu alojamiento soñado!</h2>
        <p className="des mt-3">Llena tus datos de pago y listo</p>
        <h2 className="det text-center mt-5">Detalles de tu viaje</h2>
        <Row>
          <Col>
            <Card className="mb-5">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="fec m-0">
                    Fecha de viaje:{" "}
                    <span className="text m-0"> {datospago.checkin} al {datospago.checkout} </span>
                  </p>
                  <p className="fec m-0">
                    Viajeros: <span className="text m-0">{datospago.viajeros}</span>{" "}
                  </p>
                </div>
                <hr />
                <p className="text-s">
                  Precio {datospago.cantdias} noches <span className="text ms-4"> $ {datospago.total} </span>{" "}
                </p>
                <p className="text-s">
                  Tarifa de limpieza{" "}
                  <span className="text ms-4"> $ 5000 </span>{" "}
                </p>
                <p className="text-s">
                  Tarifa por servicio <span className="text ms-4"> $ 918 </span>{" "}
                </p>
                <hr />
                <p className="text-end fec">
                  TOTAL: <span className="text fs-3">$ {Number(datospago.total) + 5918}</span>
                </p>
              </div>
            </Card>

            <Card className="mb-5">
              <div className="card-body">
                <Form>
                  <Form.Group>
                    <Form.Group className="d-flex mb-3">
                      <div className="col-5">
                        <Form.Label className="fec">
                          Nombre completo:{" "}
                        </Form.Label>
                      </div>
                      <div className="col-7">
                        <Form.Control className="ctrol"></Form.Control>
                      </div>
                    </Form.Group>

                    <Form.Group className="d-flex">
                      <div className="col-5">
                        <Form.Label className="fec">
                          Número de tarjeta:{" "}
                        </Form.Label>
                      </div>
                      <div className="col-7">
                        <Form.Control className="ctrol"></Form.Control>
                      </div>
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-between mt-3 gap-4 gap-sm-0">
                      <div>
                      <Form.Label className="me-4 fec">
                        Fecha de Vencimiento{" "}
                      </Form.Label>
                      <Form.Control className="ctrol"></Form.Control>
                      </div>
                      <div>
                      <Form.Label className="mx-4 fec">CVV </Form.Label>
                      <Form.Control className="ctrol"></Form.Control>
                      </div>
                    </Form.Group>
                  </Form.Group>
                  <Button className="d-block mx-auto mt-5 btn-r px-5 py-3" onClick={confirmReserva}>Reservar</Button>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
        {/* <h3>Conocé más sobre la política de cancelación</h3>
        <p>Podés cancelar tu viaje con hasta 73 horas de cancelación pasado ese tiempo se cobrará una penalidad.</p>
        <p>Para conocer más sobre la misma ingresá acá.</p> */}
      </Container>
    </>
  );
}

export default BasicExample;
