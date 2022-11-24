import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './sectionStyles.css'

function SectionImg1() {
  return (
    <>
      <Container className="grid">
        <h2 className="text-center">Todavia no te decidiste?</h2>
        <Row>
          <Col>
            <Card className="my-5">
              <Card.Img
                variant="top"
                src="https://www.w3schools.com/howto/img_fjords.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-5">
              <Card.Img
                variant="top"
                src="https://www.w3schools.com/howto/img_fjords.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-5">
              <Card.Img
                variant="top"
                src="https://www.w3schools.com/howto/img_fjords.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SectionImg1;
