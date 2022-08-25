import { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Header from "../../features/nav/Header";
import "./styles.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="main">
      <Header setFormOpen={setFormOpen} />
      <br />
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
    </div>
  );
}

export default App;
