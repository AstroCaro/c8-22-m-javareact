import React, { useMemo } from "react";
import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import API from "./api.json";

import "./results.css";

const Results = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const inputRef = useRef();

  const hoteles = API;

  const filteredHoteles = useMemo(() => {
    return hoteles.filter((items) =>
      items.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, hoteles]);

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    setQuery(value);
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="containers">
          <input
            placeholder="Type to search..."
            className="inputs"
            name="text"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="icons">
            <svg
              viewBox="0 0 512 512"
              className="ionicon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search</title>
              <path
                strokeWidth="32"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              ></path>
              <path
                d="M338.29 338.29L448 448"
                strokeWidth="32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
              ></path>
            </svg>
          </div>
        </div>
      </form>
      <Container>
        <h2>Buscar Hoteles</h2>
        {/* <h2>agregar Hoteles</h2>
        <form onSubmit={onSubmit}>
          Nuevo Hotel
          <input type="text" ref={inputRef} />
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </form> */}
        <div className="text-center">
          <h2 className="p-4">Hoteles</h2>
          <>
            <Row xs={2} md={3} className="g-3 mt-2">
              {filteredHoteles
                .filter((item) => {
                  return item.title.toLowerCase().includes(query.toLowerCase());
                })
                .map((item) => (
                  <Col>
                    <Card
                      className="text-center shadow-lg my-4 mx-2"
                      border="success"
                    >
                      <Card.Img
                        variant="top"
                        className="img-fluid h-100"
                        src={item.image}
                      />
                      <Card.Body className="py-4 my-2 border-3">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>descripcion : {item.name}</Card.Text>
                        <Card.Text>Pais : {item.country}</Card.Text>
                        <Card.Text>Tags : {item.tags.join(", ")}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </>
        </div>
      </Container>
    </>
  );
};

export default Results;
