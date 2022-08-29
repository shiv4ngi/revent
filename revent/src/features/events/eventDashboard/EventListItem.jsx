import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import EventListAttendee from "./EventListAttendee";

function EventListItem({ item, handleSelectedEvent, handleDeleteEvent }) {
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
              <Card.Text>Hosted by {item.hostedBy}</Card.Text>
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
            {item?.attendees?.map((attendee, index) => {
              return (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              );
            })}
          </div>
          <hr />
          <div>{item.description}</div>

          <div className="d-flex justify-content-end">
            <Button
              className="mx-2"
              variant="outline-danger"
              onClick={() => {
                handleDeleteEvent(item.id);
                console.log(item);
              }}
            >
              Delete
            </Button>
            <Link to={`/events/${item.id}`}>
              <Button
                variant="dark"
                // onClick={() => {
                //   handleSelectedEvent(item);
                //   console.log(item);
                // }}
              >
                View
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default EventListItem;
