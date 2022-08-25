import { Container, Row, Col } from "react-bootstrap";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import { useState } from "react";

function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <EventList events={events} />
          </Col>
          {formOpen && (
            <Col lg={4}>
              <EventForm setFormOpen={setFormOpen} />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default EventDashboard;
