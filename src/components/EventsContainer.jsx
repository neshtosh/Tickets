import React from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import "./EventsContainer.css";

const EventsContainer = ({ events, showMoreButton = true }) => {
  return (
    <div className="events-container">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
      {showMoreButton && (
        <div className="more-events">
          <Link to="/all-events">
            <button className="more-events-button">More Events</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventsContainer;
