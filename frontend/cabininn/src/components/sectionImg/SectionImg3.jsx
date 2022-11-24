/* import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
 */
import { Container } from "react-bootstrap";
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
    </>
  );
}

export default SectionImg3;
