import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, name, location, date, image }) => {
  // Attempt to parse the date string to ensure it works in all formats
  const eventDate = new Date(date);

  // Handle invalid dates gracefully
  const isValidDate = !isNaN(eventDate);

  // Extract components if the date is valid
  const day = isValidDate ? eventDate.toLocaleString("en-US", { weekday: "short" }) : "24";
  const month = isValidDate ? eventDate.toLocaleString("en-US", { month: "short" }) : "2024";
  const dateNum = isValidDate ? eventDate.getDate() : "Fri";

  return (
    <div className="event-card">
      <div className="event-date-badge">
        <span className="event-day">{day}</span>
        <span className="event-date">{dateNum}</span>
        <span className="event-month">{month}</span>
      </div>
      <img src={image} alt={name} className="event-image" />
      <div className="event-details">
        <h3 className="event-name">{name}</h3>
        <div className="event-meta">
          <p className="event-date">
            <FaCalendarAlt className="icon" />
            {isValidDate ? eventDate.toDateString() : "Date unavailable"}
          </p>
          <p className="event-location">
            <FaMapMarkerAlt className="icon" />
            {location}
          </p>
        </div>
        <Link to={`/event/${id}`} className="event-link">
          <button className="event-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
