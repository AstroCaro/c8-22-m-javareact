import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function SectionImg3() {
  return (
    <>
      <Container className="my-5">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="w-100 h-25"
          />
          <Card.Body>
            <Card.Text>
              Here's going to be some Image. This is an example of a card
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SectionImg3;
