import { Container, Row, Col } from "react-bootstrap";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";

function EventDashboard({
  formOpen,
  setFormOpen,
  handleSelectedEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvents = (event) => {
    setEvents([...events, event]);
  };

  const handleUpdateEvent = (UpdateEvent) => {
    setEvents(
      events.map((evt) => (evt.id === UpdateEvent.id ? UpdateEvent : evt))
    );
    handleSelectedEvent(null);
    setFormOpen(false);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <EventList
              events={events}
              handleSelectedEvent={handleSelectedEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          </Col>
          <Col lg={4}>EVENT FILTERS</Col>
        </Row>
      </Container>
    </>
  );
}

export default EventDashboard;
