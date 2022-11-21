import { Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            {/* Tarjeta 1 */}
            <Card className="mb-3">
              <div className="card-body">
                <p className="h5 fw-bold"> Tu viaje</p>
                <Row>
                  <Col>
                    <Card.Text className=" fw-bold">
                      Fecha <br />
                      1-6 de dic
                    </Card.Text>
                    <Card.Text className=" fw-bold">
                      Huespedes <br />1 huesped
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Edita </Card.Text>
                    <Card.Text>Edita</Card.Text>
                    <Card.Text>Edita</Card.Text>
                  </Col>
                </Row>
              </div>
            </Card>

            <Form>
              <Form.Text className="fw-bold body">Paga con</Form.Text>
              <Form.Select className="mb-3" aria-label="Default select example">
                <option>Tarjeta de credito o debito</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Numero de Tarjeta" />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Control placeholder="Caducidad" />
                </Col>
                <Col>
                  <Form.Control placeholder="Codigo CVV" />
                </Col>
              </Row>
              <Form.Text className="fw-bold">
                Direccion de Facturacion
              </Form.Text>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Direccion" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Numero de apartamento o de sulte" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Ciudad" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Control placeholder="Estado/Provincia/Departamento" />
                </Col>
                <Col>
                  <Form.Control placeholder="Codigo postal" />
                </Col>
              </Row>
              <Form.Select
                className="mb-3 mt-2"
                aria-label="Default select example"
              >
                <option>Pais/region</option>
                <option value="1">Ecuador</option>
                <option value="2">Peru</option>
                <option value="3">Argentina</option>
              </Form.Select>
            </Form>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_960_720.jpg" />
                  </Col>
                  <Col>
                    <Card.Text>Villa entero</Card.Text>
                    <Card.Text>
                      Villa Punta del Sol con Piscina y playa
                    </Card.Text>
                    <Card.Text>5.00 (6 reseñas)</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Card.Text>
                  Tu reservacion cuenta con la proteccion de aircover
                </Card.Text>
                <hr />
                <Card.Text className="fw-bold">
                  Informacion del precio
                </Card.Text>
                <Row>
                  <Col>
                    <Card.Text>S/1,904.70</Card.Text>
                    <Card.Text>Tarifa de limpieza</Card.Text>
                    <Card.Text>Tarifa por servicio</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>$ 1000</Card.Text>
                    <Card.Text>$ 1000</Card.Text>
                    <Card.Text>$ 1000</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <Card.Text>Total</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>$ 1000</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicExample;
