
import './sectionStyles.css'
import img from '../../images/imagenultima.jpg'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function SectionImg1() {
  return (
    <>
      <Container className="text-center">
      <h2 className="mainTitles mt-5 mb-2">¿Te gustan las sorpresas?</h2>
      <h4 className="subTitles mb-5 mb-2">Proba nuestros destinos aleatorios y dejate sorprender</h4>
    </Container>
    <div className="mb-3">
      <Link to = {`./reservation/${Math.floor(Math.random()*14)}`}>
      <img className="w-100 img-fluid mb-5" src={img} alt="" />
      </Link>
    </div>
    </>
  );
}

export default SectionImg1;
