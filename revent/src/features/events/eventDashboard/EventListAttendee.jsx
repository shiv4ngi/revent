function EventListAttendee({ attendee }) {
  return (
    <>
      <div className="attendee">
        <img
          src={attendee.photoURL}
          alt="user"
          className="attendee-img img-fluid"
        />
        {/* <p>{attendee.name}</p> */}
      </div>
    </>
  );
}

export default EventListAttendee;
