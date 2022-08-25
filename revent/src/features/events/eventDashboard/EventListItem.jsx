import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import EventListAttendee from "./EventListAttendee";

function EventListItem({ item }) {
  return (
    <>
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Row>
            <Col lg={2} className="d-flex justify-content-center">
              <img
                src={item.hostPhotoURL}
                alt="user"
                className="user-img img-fluid"
              />
            </Col>
            <Col lg={10}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.hostedBy}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={2}>
              {/* <img src="./assets/clock.svg" alt="🕑" /> */}
              🕑 {item.date}
            </Col>
            <Col>
              {/* <img src="./assets/map-pin.svg" alt="📌" /> */}
              📌 {item.venue}
            </Col>
          </Row>
          <hr />
          <div className="parent-div">
            {item.attendees.map((attendee, index) => {
              return (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              );
            })}
          </div>
          <hr />
          <div>{item.description}</div>

          <div className="d-flex justify-content-end">
            <Button variant="dark">View</Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default EventListItem;
