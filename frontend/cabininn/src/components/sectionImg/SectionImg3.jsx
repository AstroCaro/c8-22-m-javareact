import { Container } from "react-bootstrap";
import final from '../../images/final.jpg'

function SectionImg3() {
  return (
    <>
    <Container className="text-center">
      <h2 className="mainTitles mt-2 mb-2">Tu alojamiento ideal</h2>
      <h4 className="subTitles mb-5 mb-2">A un Click de distancia</h4>
    </Container>
    <div className="mb-3">
      <img className="w-100 img-fluid mb-5" src={final} alt="" />
    </div>

    </>
  );
}

export default SectionImg3;
