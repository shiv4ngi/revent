import { Container, Row, Col } from "react-bootstrap";

function EventDetailedSidebar() {
  return (
    <>
      <Container className="event-sidebar">
        <Row
          className="d-flex justify-content-center mb-3"
          // style={{ backgroundColor: "red" }}
        >
          <h4 className="text-center"> 2 People Going</h4>
        </Row>
        <Row>
          <Col lg={4}>
            <img src="/assets/user.png" className="sidebar-img img-fluid" />
          </Col>
          <Col lg={8} className="d-flex align-items-center">
            <h6>Tom</h6>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={4}>
            <img src="/assets/user.png" className="sidebar-img img-fluid" />
          </Col>
          <Col lg={8} className="d-flex align-items-center">
            <h6>Bob</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EventDetailedSidebar;
