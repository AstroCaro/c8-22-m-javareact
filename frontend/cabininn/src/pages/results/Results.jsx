import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./results.css";

const Results = () => {
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });

  const posts = [
    {
      url: "",
      tags: ["Hotel", "vacaciones", "hoteles", "5 estrellas"],
      title: "Hotel de ejemplo",
    },
    {
      url: "",
      tags: ["node", "express"],
      title: "Hotel de ejemplo 2",
    },
    {
      url: "",
      tags: ["node", "express"],
      title: "Argentina",
    },
  ];

  const handleChange = (e) => {
    const results = posts.filter((post) => {
      if (e.target.value === "") return posts;
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <>
      <form>
        <div className="containers">
          <input
            placeholder="Type to search..."
            className="inputs"
            name="text"
            type="search"
            value={search.query}
            onChange={handleChange}
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
      <div>
        {search.query === ""
          ? `Busqueda vacia`
          : !search.list.length
          ? "No se encontraron resultados"
          : search.list.map((post) => {
              return (
                <>
                  <Row xs={2} md={3} className="g-3 mt-2">
                    {posts.map((post) => (
                      <Col>
                        <Card className="text-center" border="success">
                          <Card.Img variant="top" src="" />
                          <Card.Body className="py-4 my-4">
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>Example text</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}   
                  </Row>
                </>
              );
            })}
            </div>
      </Container>
    </>
  );
};

export default Results;
