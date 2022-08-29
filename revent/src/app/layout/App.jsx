import { useState } from "react";
import { Route } from "react-router-dom";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventDashboard/EventForm";
import EventDetailedPage from "../../features/events/eventDetailedPage/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import Header from "../../features/nav/Header";
import "./styles.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <Header setFormOpen={handleCreateFormOpen} />
      <div className="main">
        <br />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={EventDashboard} />
        <Route exact path="/events/:id" component={EventDetailedPage} />
        <Route
          path={["/create-event", "/manage-event/:id"]}
          component={EventForm}
        />
        {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          handleSelectedEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        /> */}
      </div>
    </>
  );
}

export default App;
