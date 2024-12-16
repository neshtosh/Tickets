import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import "./PastEventCard.css";

const PastEventCard = ({ name, location, date, prices, image }) => {
  return (
    <div className="past-event-card">
      <div className="past-event-info">
        <h3>{name}</h3>
        <img src={image} alt={name} className="past-event-image" />
        <p>
          <FaMapMarkerAlt className="icon" />
          <strong></strong> {location}
        </p>
        <p>
          <FaCalendarAlt className="icon" />
          <strong></strong> {date}
        </p>
        {prices && (
          <div className="event-prices">
            <p>
              <FaTicketAlt className="icon" />
              <strong>Prices:</strong>
            </p>
            <ul>
              <li>Children: {prices.children}</li>
              <li>Adults: {prices.adults}</li>
              <li>Group: {prices.group}</li>
            </ul>
          </div>
        )}
        <button className="buy-button">View Event</button>
      </div>
    </div>
  );
};

export default PastEventCard;
