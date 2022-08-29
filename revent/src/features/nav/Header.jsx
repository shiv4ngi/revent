import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";

function Header({ setFormOpen }) {
  return (
    <>
      <Navbar className="header" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Row>
              <Col>
                <img
                  className="img-fluid"
                  src="/assets/logo.png"
                  alt="Logo"
                  style={{ height: "6vh" }}
                />
              </Col>
              <Col className="d-flex align-items-center">
                <span>Re-event</span>
              </Col>
            </Row>
          </Navbar.Brand>
          {/* <Nav.Link href="/events">
            <div className="white mx-3">Event</div>
          </Nav.Link> */}
          <Nav className="me-auto">
            <Nav.Link href="/create-event">
              <Button
                variant="light"
                onClick={() => {
                  setFormOpen(true);
                }}
              >
                Create Event
              </Button>
            </Nav.Link>
          </Nav>

          <Nav className="me-2">
            <Nav.Link href="#features">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Button variant="outline-light">Register</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
