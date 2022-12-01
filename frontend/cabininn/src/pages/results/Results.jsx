import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdGTranslate } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./results.css";
import { Link } from "react-router-dom";

const Results = ({ capture, hotels }) => {
  let { country } = useParams();

  const pintaCards = () => {
    if (capture === undefined) {
      const hotelbyCountry = hotels.filter(
        (hotel) => hotel.address.countryName === country
      );

      return (
        <Container>
          <h2 className="mainTitleResult text-center ">
            7 Resultados para Bariloche
          </h2>

          <div className="text-center">
            <h2 className="subTitleResult">
              Estos son los resultados de tu búsqueda ¡Encontrá el que más te
              gusté!{" "}
            </h2>
            <>
              <Row xs={1} md={1} className="g-3 mt-2">
                {hotelbyCountry.map((item) => (
                  <Col key={item.id}>
                    <Link
                      to={`/reservation/${item.id}`}
                      className="text-decoration-none text-body"
                    >
                      <Card className="shadow-lg my-4 mx-2" border="success">
                        <Card.Img
                          variant="top"
                          className="img-fluid h-100 rounded"
                          src={item.urlFoto}
                        />
                        <Card.Body className="py-4 my-2 border-3">
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Title>
                                <span className="cardTitleResult">
                                  {item.name}
                                </span>
                              </Card.Title>
                            </Col>
                            <Col className="text-end">
                              <span className="cardIcons mx-2 my-4">
                                <BiCommentDetail />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <AiOutlineHeart />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <MdGTranslate />
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Text>descripcion : {item.name}</Card.Text>
                              <Card.Text>
                                chainCode : {item.chainCode}
                              </Card.Text>
                              <Card.Text>iataCode : {item.iataCode}</Card.Text>
                              <Card.Text>
                                address :{item.address.postalCode}
                                <br />
                                {item.address.countryCode}
                                <br />
                                {item.address.countryName}
                                <br />
                                {item.address.cityName}
                                <br />
                                {item.address.id}
                              </Card.Text>
                              <Card.Text>
                                distance :{item.distance.value}
                                {item.distance.unit}
                              </Card.Text>
                              <Card.Text className="cardTotal">
                                Total : $ {item.dailyPrice}
                              </Card.Text>
                            </Col>
                            <Col className="text-end my-2">
                              <span className="btn btnCard">Reservar</span>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <h2 className="mainTitleResult text-center ">
            7 Resultados para Bariloche
          </h2>

          <div className="text-center">
            <h2 className="subTitleResult">
              Estos son los resultados de tu búsqueda ¡Encontrá el que más te
              gusté!{" "}
            </h2>
            <>
              <Row xs={1} md={1} className="g-3 mt-2">
                {capture.map((item) => (
                  <Col key={item.id}>
                    <Link
                      to={`/reservation/${item.id}`}
                      className="text-decoration-none text-body"
                    >
                      <Card className="shadow-lg my-4 mx-2" border="success">
                        <Card.Img
                          variant="top"
                          className="img-fluid h-100 rounded"
                          src={item.urlFoto}
                        />
                        <Card.Body className="py-4 my-2 border-3">
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Title>
                                <span className="cardTitleResult">
                                  {item.name}
                                </span>
                              </Card.Title>
                            </Col>
                            <Col className="text-end">
                              <span className="cardIcons mx-2 my-4">
                                <BiCommentDetail />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <AiOutlineHeart />
                              </span>
                              <span className="cardIcons mx-2 my-4">
                                <MdGTranslate />
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="text-start mx-4">
                              <Card.Text>descripcion : {item.name}</Card.Text>
                              <Card.Text>
                                chainCode : {item.chainCode}
                              </Card.Text>
                              <Card.Text>iataCode : {item.iataCode}</Card.Text>
                              <Card.Text>
                                address :{item.address.postalCode}
                                <br />
                                {item.address.countryCode}
                                <br />
                                {item.address.countryName}
                                <br />
                                {item.address.cityName}
                                <br />
                                {item.address.id}
                              </Card.Text>
                              <Card.Text>
                                distance :{item.distance.value}
                                {item.distance.unit}
                              </Card.Text>
                              <Card.Text className="cardTotal">
                                Total : $ {item.dailyPrice}
                              </Card.Text>
                            </Col>
                            <Col className="text-end my-2">
                              <span className="btn btnCard">Reservar</span>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </>
          </div>
        </Container>
      );
    }
  };

  return <>{pintaCards()}</>;
};

export default Results;
