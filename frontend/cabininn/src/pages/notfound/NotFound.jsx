import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const NotFound = () => {
  return (
    <>
      <Container className="my-5 text-center">
        <h1 className="mainTitleResult">
          ¡Algo paso! Volvamos a tierras seguras.
        </h1>
        <div className="my-5">
          <Image
            src="https://static7.depositphotos.com/1302980/788/v/950/depositphotos_7883151-stock-illustration-files-conflict-error-404.jpg"
            alt="not-found"
            className="my-5"
          ></Image>
        </div>
        <div>
          <h2 className="mainTitleResult text-center">
            Si el error persiste espera unos minutos y volvé a intentar
          </h2>
        </div>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="my-5 text-decoration-none"
        >
          Volver al home
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
