import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './reservation.css'
import axios from 'axios'

const ReservationByOne = () => {
 
  let {id} = useParams();
  const [hotels, sethotels] = useState([]);
  const [hotelid, sethotelid] = useState()
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(()=> {
    axios.get('https://api.jsonbin.io/v3/b/637ecc2f65b57a31e6c15c6d')
    .then(res=>sethotels(res.data.record))
     
  },[])



  const hotelFind = hotels.filter(h => h.id == id)


  

  return (
    <div className="container pt-4 reservation">
      <h2>{hotelFind[0]?.name}</h2>
      <p className="fw-bold text-decoration-underline">{hotelFind[0]?.location} {hotelFind[0]?.country}</p>
      <div className="row">
        <div className="col-8">
          <img
            src={hotelFind[0]?.img1}
            alt=""
            className="img-fluid h-100"
          />
        </div>
        <div className="col-4">
          <img
            src={hotelFind[0]?.img2}
            alt=""
            className="img-fluid h-100"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-7">
          <h3>Cabaña entero - Anfitrión: Patty</h3>
          <p>2 huéspedes1 - habitación1 - cama1 - baño</p>

          <p>
          {hotelFind[0]?.description}
          </p>

          <p>
            Tu salud y seguridad son nuestra principal preocupación. Hemos
            tomado todas las medidas necesarias para limpiar y desinfectar
            adecuadamente Airbnb. Se desinfectarán todas las superficies,
            controles remotos de TV, manijas de puerta, grifos de baño y manijas
            de inodoro. Encontrará alcohol en gel, jabón líquido y toalla de
            papel para su uso.
          </p>
        </div>
        <div className="col-5">
          <Form className="border rounded p-2 mt-2">
            <Form.Label className="fw-bold">Información de reserva</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>Fechas: </InputGroup.Text>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className='datatime text-center'
                placeholderText="LLEGADA"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className='datatime text-center'
                placeholderText="SALIDA"
              />
            </InputGroup>
            <Form.Select aria-label="Default select example">
              <option>1 Adulto</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Group className="mt-3 mb-1">
              <Button variant="danger" className="d-block mx-auto">
                Confirmar Reserva
              </Button>
            </Form.Group>
            <p>No se hará ningún cargo por el momento</p>
            <hr />
            <div className="row">
              <div className="col">
                <p className="fw-bold">Total: </p>
              </div>
              <div className="col">
                <p> $1500.00</p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReservationByOne;
