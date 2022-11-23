import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function SectionImg3() {
  return (
    <>
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
