import EventListItem from "./EventListItem";

function EventList({ events, handleSelectedEvent, handleDeleteEvent }) {
  return (
    <>
      {events?.map((i, index) => {
        return (
          <EventListItem
            key={Math.random()}
            item={i}
            handleSelectedEvent={handleSelectedEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        );
      })}
    </>
  );
}

export default EventList;
