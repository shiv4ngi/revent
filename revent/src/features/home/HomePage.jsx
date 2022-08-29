import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="home-page-main">
        <div className="home-page-sec">
          <h1>Re-Events</h1>
          <Link to={"/events"}>
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
