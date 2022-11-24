/* import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
 */
import { Card, Container } from "react-bootstrap";
import "./sectionimg3.css";
function SectionImg3() {
  return (
    <>
      <Container>
        <h2 className="card-1__title">¿Todavia no te decidiste?</h2>
        <p className="card-1__text">Mirá los destinos exclusivos para vos</p>
        <div className="card-1 hero-image">
          <p>
            Salta <br /> $8960
          </p>
        </div>
      </Container>
      <Container>
        <h2 className="card-2__title">Tu alojamiento ideal</h2>
        <p className="card-2__text">A un click de distancia</p>
        <div className="card-2 hero-image">
          <p className="card-2__hero-text">Reserva ahora en pesos</p>
        </div>
      </Container>
      <Container className="text-center">
        <h2 className="my-5">Tu alojamiento ideal</h2>
        <h4 className="mb-5">A un Click de distancia</h4>
      </Container>
      <Card className="heroCard bg-dark text-white">
        <Card.Img
          src="https://www.w3schools.com/howto/img_fjords.jpg"
          className="heroImg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="heroCardTitle text-center">
            Reserva ahora en pesos
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default SectionImg3;
