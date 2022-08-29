import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function EventForm({
  setFormOpen,
  setEvents,
  createEvents,
  selectedEvent,
  updateEvents,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleformSubmit = () => {
    console.log(values);

    selectedEvent
      ? updateEvents({ ...selectedEvent, ...values })
      : createEvents({
          ...values,
          id: Math.random(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "./assets/user.png",
        });
    // setEvents(initialValues);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <Form className="event-form">
          <div>
            <h4 className="text-center py-3">
              {selectedEvent ? "Edit you event" : "Create new event"}
            </h4>
          </div>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Event title"
              name="title"
              value={values.title}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Link to="/">
              <Button
                variant="outline-secondary"
                type="submit"
                className="mx-2"
              >
                Cancel
              </Button>
            </Link>
            <Button variant="dark" onClick={handleformSubmit} className="mx-2">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default EventForm;
