import { Container, Row, Col, Button } from "react-bootstrap";

function EventDetailedInfo() {
  return (
    <>
      <br />
      <Container style={{ backgroundColor: "#fff", padding: "2%" }}>
        <Row>
          {/* <Col lg={2}>
            <img src="/assets/clock.svg" alt="i" />
          </Col> */}
          <Col> ℹ Event Description</Col>
        </Row>
        <hr />
        <Row>
          {/* <Col lg={2}>
            <img src="/assets/clock.svg" alt="i" />
          </Col> */}
          <Col lg={10}>📅 Event Date</Col>
        </Row>
        <hr />
        <Row>
          {/* <Col lg={2}>
            <img src="/assets/map-pin.svg" alt="i" />
          </Col> */}
          <Col lg={10}>📌 Event Venue</Col>
          <Col lg={2} className="d-flex justify-content-end">
            <Button variant="info">Event Map</Button>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default EventDetailedInfo;
