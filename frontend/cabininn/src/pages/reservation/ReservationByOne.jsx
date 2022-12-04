import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Container, Carousel } from "react-bootstrap";
import { BiMap, BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdGTranslate } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "./reservation.css";

const ReservationByOne = () => {
  let { id } = useParams();
  const [hotels, sethotels] = useState([]);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    axios
      .get(`https://cabininn-backend-production.up.railway.app/hotels/${id}`)
      .then((res) => sethotels(res.data));
  }, []);

  const reservar = () => {
    Swal.fire(
      "Felicidades!",
      `Reservaste el día ${startDate.toLocaleDateString()} hasta el dia ${endDate.toLocaleDateString()}`,
      "success"
    );
    console.log("reservaste");
    console.log(startDate.toLocaleDateString());
    console.log(endDate.toLocaleDateString());
    console.log(id);
  };

  return (
    <Container className="reservation">
      <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hotels.urlImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hotels.urlImage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hotels.urlImage3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="mt-4">
        <Row>
          <Col>
            <span className="d-flex justify-content-start align-content-center my-2">
              <BiMap className="mapIcon" />
              <Link className="mx-2 text-decoration-none">Ver Mapa</Link>
            </span>
          </Col>
          <Col className="text-end align-content-center">
            <span className="cardIcons mx-2 my-2">
              <BiCommentDetail />
            </span>
            <span className="cardIcons mx-2 my-2">
              <AiOutlineHeart />
            </span>
            <span className="cardIcons mx-2 my-2">
              <MdGTranslate />
            </span>
          </Col>
        </Row>
        <Col className="text-center">
          <h3 className="mainTitleResult mt-4">{hotels.name}</h3>
          <p>
            {hotels.rooms} Habitaciones - {hotels.guestsNumber} Huespedes -{" "}
            {hotels.bathrooms} Baños{" "}
          </p>
          <p>$ {hotels.dailyPrice}</p>
          <p>{hotels.descripcion}</p>
        </Col>
        <Row>
          <Col className="col-18">
            <Form className="border rounded p-2 my-4">
              <Form.Label className="fw-bold">
                Información de reserva
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>Fechas </InputGroup.Text>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="datatime text-center"
                  placeholderText="Fecha de Inicio"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="datatime text-center"
                  placeholderText="Fecha de Salida"
                />
              </InputGroup>
              <Form.Select aria-label="Default select example" className="my-4">
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="3">3 Adultos</option>
                <option value="4">4 Adultos</option>
                <option value="5">+4 Adultos</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option value="1">1 Niños</option>
                <option value="2">2 Niños</option>
                <option value="3">3 Niños</option>
                <option value="4">4 Niños</option>
                <option value="5">+4 Niños</option>
              </Form.Select>
              <Form.Group className="my-5 text-center">
                {/* <Link to='../../pays'> */}
                <Button
                  variant="success"
                  className="d-block mx-auto"
                  onClick={reservar}
                >
                  Confirmar Reserva
                </Button>
                {/* </Link> */}
              </Form.Group>
              <hr/>
              <Row>
                <Col>
                  <p className="fw-bold">Total: </p>
                </Col>
                <Col>
                <p>$ {hotels.dailyPrice}</p>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ReservationByOne;
