import Card from "react-bootstrap/Card";
import './sectionStyles.css'

function ImgOverlayExample() {
  return (
    <>
        <Card className="heroCard bg-dark text-white">
          <Card.Img
            src="https://www.w3schools.com/howto/img_fjords.jpg"
            className="heroImg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="heroCardTitle my-5 py-5 text-center">
              Salta
            </Card.Title>
            <Card.Text className="heroCardSubTitle text-center">
            $8960
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
    </>
  );
}

export default ImgOverlayExample;
