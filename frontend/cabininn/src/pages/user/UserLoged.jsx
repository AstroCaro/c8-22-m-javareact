import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Image } from "react-bootstrap";
import { ImStarHalf, ImStarFull } from "react-icons/im";
import "./user.css";
import { MdNorthWest } from "react-icons/md";

function UserLoged() {

  const logout = () => {
   

    localStorage.removeItem("session");
    localStorage.removeItem("dataSession");
    window.location.assign("/");
  };



    

  return (
    <>
      <Container className="userContainer">
        <Row>
          <Col className="align-content-center userDataContainer">
            <h1 className="userTitle my-2">Bienvenido</h1>
            <Image
              className="userAvatar my-4"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
            <h4 className="userHello my-2">Hola, Martin</h4>
            <p>Email : XXXXXXXXXXXXXXXX</p>
            <p> country : XXXXXXXXXXXXXXXX</p>
            <button className="btn btn-primary btnEdit my-2">
              Editar perfil
            </button>
            <br />
            <button className="btn btn-primary btnLogout my-2" onClick={logout}>
              Cerrar sesion
            </button>
            <div className="my-2 py-2">
              <p>Mis Propiedades</p>
              <p>Solicitudes</p>
              <p>Mensajes</p>
              <p>Calendario</p>
              <p>Estadisticas</p>
              <p>Usuarios Bloqueados</p>
              <p>Ayuda</p>
            </div>
          </Col>
          <Col>
            <Container className="userStatContainer">
              <Row>
                <Col className="align-content-center">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>Balance del Mes</Card.Title>
                      <Card.Text className="statNumber">$354984</Card.Text>
                      <Card.Text className="text-muted">
                        Comparado con ($21340 junio 2021)
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>Pagos del Dia</Card.Title>
                      <Card.Text className="statNumber">$12500</Card.Text>
                      <Card.Text className="text-muted">
                        Comparado con ($8600 ayer)
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>Total Anual</Card.Title>
                      <Card.Text className="statNumber">$1.109.865</Card.Text>
                      <Card.Text className="text-muted">
                        Comparado con ($68900 dic 2021)
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="userDataTitle">Mis Propiedades</Card.Title>
                      <Card.Text>Card del propietario</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="userDataTitle">Calendario</Card.Title>
                      <Card.Text>Card del Calendario</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="userDataTitle">Resumen - Estadisticas</Card.Title>
                      <Card.Text className="text-muted">
                        Bariloche- Calle Sarmiento esq Ticornia
                      </Card.Text>
                      <Card.Text className="fw-bold">5.987,37</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="userDataTitle">Puntuacion</Card.Title>
                      <Card.Text className="starIcons">
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarHalf />
                      </Card.Text>
                      <div className="my-2">
                        <Card className="my-4">
                          <Card.Body>
                            <Card.Img
                              className="avatar"
                              src="https://www.w3schools.com/howto/img_avatar2.png"
                              alt="Avatar"
                            />
                            <Card.Title>Martina te dio 5 Estrellas</Card.Title>
                            <Card.Text className="starIcons">
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                            </Card.Text>
                            <Card.Text>
                              Hermoso lugar, 100% recomendado
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="my-4">
                          <Card.Body>
                            <Card.Img
                              className="avatar"
                              src="https://www.w3schools.com/howto/img_avatar2.png"
                              alt="Avatar"
                            />
                            <Card.Title>Giuliana te dio 4 Estrellas</Card.Title>
                            <Card.Text className="starIcons">
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                            </Card.Text>
                            <Card.Text>Martin es un capo!</Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="my-4">
                          <Card.Body>
                            <Card.Img
                              className="avatar"
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="Avatar"
                            />
                            <Card.Title>Jose te dio 4 Estrellas</Card.Title>
                            <Card.Text className="starIcons">
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                              <ImStarFull />
                            </Card.Text>
                            <Card.Text>Muy buena ubicacion</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Row>
                  <Col className="align-content-center">
                    <Card className="my-4">
                      <Card.Body>
                        <Card.Title className="userDataTitle text-center">
                          Mensajes
                        </Card.Title>
                      </Card.Body>
                      <Card className="my-2 mx-2">
                        <Card.Body className="d-flex">
                          <Card.Img
                            className="avatar"
                            src="https://www.w3schools.com/howto/img_avatar2.png"
                            alt="Avatar"
                          />
                          <Card.Title className="mx-2 userMessageTitle">
                            María luz
                          </Card.Title>
                          <Card.Text className="mt-4 userMessage">
                            ¡Hola! ¿Cuál es el horario del check in?
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="my-2 mx-2">
                        <Card.Body className="d-flex">
                          <Card.Img
                            className="avatar"
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt="Avatar"
                          />
                          <Card.Title className="mx-2 userMessageTitle">
                            José Rodriguez
                          </Card.Title>
                          <Card.Text className="mt-4 userMessageSmall2">
                            Buenas tardes ¿La blanquería está incluida?
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="my-2 mx-2">
                        <Card.Body className="d-flex">
                          <Card.Img
                            className="avatar"
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt="Avatar"
                          />
                          <Card.Title className="mx-2 userMessageTitle">
                            Lucas Santoro
                          </Card.Title>
                          <Card.Text className="mt-4 userMessageSmall">
                            ¡Hola! ¿Cómo estás?
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="my-2 mx-2">
                        <Card.Body className="d-flex">
                          <Card.Img
                            className="avatar"
                            src="https://www.w3schools.com/howto/img_avatar2.png"
                            alt="Avatar"
                          />
                          <Card.Title className="mx-2 userMessageTitle">
                            Samanta
                          </Card.Title>
                          <Card.Text className="mt-4 userMessage">
                            ¡Buenos días! ¿Cuál sería la velocidad del internet?
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserLoged;
