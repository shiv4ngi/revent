import EventListItem from "./EventListItem";

function EventList({ events }) {
  return (
    <>
      {events?.map((i, index) => {
        return <EventListItem key={i.id} item={i} />;
      })}
    </>
  );
}

export default EventList;
