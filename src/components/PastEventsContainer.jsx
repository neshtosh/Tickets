// src/components/PastEventsContainer.jsx
import React from "react";
import EventCard from "./EventCard"; // Import EventCard component
import "./PastEventsContainer.css";
import PastEventCard from "./PastEventCard";

const PastEventsContainer = ({ events }) => {
  return (
    <div className="past-events-container">
        <h2 className="past-events-title">Past Events</h2>
        <div className="past-event-grid">
         {events.map(( event ) => (
          <PastEventCard
            key={event.id}
            name={event.name}
            location={event.location}
            date={event.date}
            image={event.image}
            prices={null} // Set prices as null to omit the prices section
          />
         ))}
       </div>
      </div>
    
  );
};

export default PastEventsContainer;
