import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function SectionImg3() {
  return (
    <>
      <Container className="my-5 w-100 h-25">
      <Card className="bg-dark text-white">
          <Card.Img
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="w-100"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="justify-content-center text-center font-monospace">
              Card title
            </Card.Title>
            <Card.Text className="text-center font-monospace">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
}

export default SectionImg3;
