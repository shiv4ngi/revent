import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EventForm({ setFormOpen }) {
  return (
    <>
      <div>
        <Form className="event-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Event title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Venue" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              type="submit"
              className="mx-2"
              onClick={() => {
                setFormOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="success" type="submit" className="mx-2">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default EventForm;
