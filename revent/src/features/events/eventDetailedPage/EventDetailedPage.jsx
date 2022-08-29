import { Container, Row, Col } from "react-bootstrap";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

function EventDetailedPage() {
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col lg={8}>
            <EventDetailedHeader />
            <EventDetailedInfo />
            <EventDetailedChat />
          </Col>
          <Col lg={4}>
            <EventDetailedSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EventDetailedPage;
