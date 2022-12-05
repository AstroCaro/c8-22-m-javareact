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
  const [cantAdults, setcantAdults] = useState(1);
  const [cantni, setcantni] = useState(1);

  const [total, settotal] = useState(0);
  useEffect(() => {
    axios
      .get(`https://cabininn-backend-production.up.railway.app/hotels/${id}`)
      .then((res) => sethotels(res.data));
  }, []);

  const reservar = () => {
    // Swal.fire(
    //   "Felicidades!",
    //   `Reservaste el día ${startDate.toLocaleDateString()} hasta el dia ${endDate.toLocaleDateString()}`,
    //   "success"
    // );
    // console.log("reservaste");
    // console.log(startDate.toLocaleDateString());
    // console.log(endDate.toLocaleDateString());
    // console.log(id);
    let numTotal = Number(cantAdults) + Number(cantni);
    let cantDias = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (hotels.guestsNumber < numTotal) {
      Swal.fire(
        "Error!",
        `El Hotel tiene solo la capacidad de ${hotels.guestsNumber} Huespedes`,
        "error"
      );
    } else {
      calcularTotal(cantDias);
      Swal.fire(
      "Felicidades!",
      `Estas a un paso de reservar el día ${startDate.toLocaleDateString()} hasta el dia ${endDate.toLocaleDateString()}`,
      "success"
    );



    }
  };

 

  const calcularTotal = (cantDias) => {
    settotal(Number(hotels?.dailyPrice) * cantDias);
    
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
              <a
                className="mx-2 text-decoration-none"
                href={`https://www.google.com.pe/maps/search/${hotels.geoCode?.latitude},${hotels.geoCode?.longitude}`}
                target="_blank"
              >
                Ver Mapa
              </a>
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
        <Col className="">
          <div className="d-flex justify-content-between mt-5">
            <div>
              <h3 className="mainTitleResult mt-4 mb-2">{hotels.name}</h3>
              <div className="">
              <i className="fa-regular fa-star fs-3 text-warning"></i>
              <i className="fa-regular fa-star fs-3 text-warning"></i>
              <i className="fa-regular fa-star fs-3 text-warning"></i>
              <i className="fa-regular fa-star fs-3 text-warning"></i>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-user"
                src="https://random.imagecdn.app/100/100"
                alt=""
              />
              <p className="nom-user">María Sanchez</p>
              <p className="rol-user">alojadora</p>
            </div>
          </div>
          <p className="fs-4 ds">
            {hotels.rooms} Habitaciones - {hotels.guestsNumber} Huespedes -{" "}
            {hotels.bathrooms} Baños{" "}
          </p>
          <p className="precio">$ {hotels.dailyPrice} / noche</p>
          <p className="desc">{hotels.descripcion}</p>
        </Col>
        <Row>
          <Col xl="6" className="col-18">
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
              <Form.Select
                id="adult"
                aria-label="Default select example"
                className="my-4"
                onChange={(e) => setcantAdults(e.target.value)}
              >
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="3">3 Adultos</option>
                <option value="4">4 Adultos</option>
                <option value="5">+4 Adultos</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setcantni(e.target.value)}
              >
                <option value="1">1 Niños</option>
                <option value="2">2 Niños</option>
                <option value="3">3 Niños</option>
                <option value="4">4 Niños</option>
                <option value="5">+4 Niños</option>
              </Form.Select>
              <Row className="my-5 mx-2">
                <Col>
                  <p className="fw-bold">Total: </p>
                </Col>
                <Col className="text-center">
                  <p>$ {total}</p>
                </Col>
              </Row>
              <Form.Group className="my-5 text-center">
                <Link to='../../pays'>
                <Button
                  variant="success"
                  className="d-block mx-auto"
                  onClick={reservar}
                >
                  Confirmar Reserva
                </Button>
                </Link>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h4 className="mb-4 fs-3 pt-4">Opiniones</h4>
            <div className="mb-5">
              <div className="d-flex">
                <img
                  className="img-user"
                  src="https://random.imagecdn.app/80/80"
                  alt=""
                />

                <p className="opi-user ms-2">Majo y Luis</p>
              </div>
              <p className="comm-user">
                Fuimos de Luna de miel y la pasamos hermoso.La vista es única y
                podes ir caminado a todos lados.
              </p>
            </div>
            <div className="mb-5">
              <div className="d-flex">
                <img
                  className="img-user"
                  src="https://picsum.photos/80"
                  alt=""
                />

                <p className="opi-user ms-2">Guillermo</p>
              </div>
              <p className="comm-user">
                Recomendadísima, la cabaña es hermosa y superconfortable.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ReservationByOne;
