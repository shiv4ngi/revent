import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventDetailedHeader() {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          className="event-img"
          src="/assets/categoryImages/drinks.jpg"
        />
        <div className="event-img-title">
          <Card.Title>Event Title</Card.Title>
          <Card.Text>
            <p>Event Date</p>
            <p>Hosted by Bob</p>
          </Card.Text>
        </div>
        <Card.Body>
          <Row className="d-flex">
            <Col>
              <Button variant="secondary">Cancle my place</Button>
              <Button className="mx-4" variant="dark">
                JOIN THIS EVENT
              </Button>
            </Col>

            <Col className="d-flex justify-content-end">
              <Link to="/manage-event">
                <Button variant="danger">Manage Event</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default EventDetailedHeader;
