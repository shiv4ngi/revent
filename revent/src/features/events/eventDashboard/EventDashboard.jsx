import { Container, Row, Col } from "react-bootstrap";

function EventDashboard() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>Left</Col>
          <Col lg={4}>Right</Col>
        </Row>
      </Container>
    </>
  );
}

export default EventDashboard;
