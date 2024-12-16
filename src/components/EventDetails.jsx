import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./EventDetails.css";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <p>Event not found!</p>;
  }

  // Helper function to parse ticket prices
  const parsePrice = (priceString) =>
    parseInt(priceString.replace(/[^0-9]/g, ""), 10);

  const ticketPrices = Object.keys(event.prices).reduce((acc, type) => {
    acc[type] = parsePrice(event.prices[type]);
    return acc;
  }, {});

  const [selectedTickets, setSelectedTickets] = useState([]);

  // Add ticket to the cart
  const handleAddTicket = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ticketType = formData.get("ticketType");
    const quantity = parseInt(formData.get("quantity"), 10);
    const price = ticketPrices[ticketType] * quantity;

    setSelectedTickets((prev) => {
      const existingTicketIndex = prev.findIndex(
        (ticket) => ticket.ticketType === ticketType
      );

      if (existingTicketIndex !== -1) {
        const updatedTickets = [...prev];
        updatedTickets[existingTicketIndex].quantity += quantity;
        updatedTickets[existingTicketIndex].price += price;
        return updatedTickets;
      }

      return [...prev, { ticketType, quantity, price }];
    });

    e.target.reset();
  };

  // Remove a ticket from the cart
  const handleRemoveTicket = (index) => {
    setSelectedTickets((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle ticket purchase and navigate to TicketSummary page
  const handlePurchase = () => {
    if (selectedTickets.length === 0) {
      alert("Please add tickets to the cart before proceeding.");
      return;
    }

    const ticketSummaryData = {
      eventName: event.name,
      eventImage: event.image,
      tickets: selectedTickets,
      totalCost,
    };

    navigate("/ticketsummary", { state: ticketSummaryData });
  };

  const totalCost = selectedTickets.reduce((acc, ticket) => acc + ticket.price, 0);

  return (
    <div className="event-details-container">
      {/* Main Content */}
      <div className="event-content">
        {/* Event Image */}
        <div className="event-details-image">
          <img src={event.image} alt={event.name} />
        </div>

        {/* Event Info */}
        <div className="event-details-info">
          <h1 className="event-name">{event.name}</h1>

          {/* Share Section */}
          <div className="share-section">
            <h3>Share this event</h3>
            <div className="social-icons">
              <a
                href={`https://wa.me/?text=Check out this event: ${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href={`https://www.instagram.com/?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>

          {/* Ticket Selection */}
          <div className="ticket-selection">
            <h3>Tickets</h3>
            <form onSubmit={handleAddTicket}>
              <div className="form-group">
                <label htmlFor="ticketType">Ticket Type:</label>
                <select id="ticketType" name="ticketType" required>
                  {Object.keys(ticketPrices).map((type) => (
                    <option key={type} value={type}>
                      {`${type.charAt(0).toUpperCase() + type.slice(1)} @ Ksh ${ticketPrices[type]}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  required
                />
              </div>
              <button type="submit" className="add-button">
                Add to Cart
              </button>
            </form>

            {/* Selected Tickets Summary */}
            {selectedTickets.length > 0 && (
              <div className="ticket-summary animated-summary">
                <h4>Selected Tickets</h4>
                <table className="summary-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Quantity</th>
                      <th>Price (Ksh)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTickets.map((ticket, index) => (
                      <tr key={index}>
                        <td>{ticket.ticketType}</td>
                        <td>{ticket.quantity}</td>
                        <td>{ticket.price}</td>
                        <td>
                          <button
                            onClick={() => handleRemoveTicket(index)}
                            className="remove-button"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h4>Total: Ksh {totalCost}</h4>
                <button onClick={handlePurchase} className="purchase-button">
                  Purchase
                </button>
              </div>
            )}
          </div>

          {/* Event Description */}
          <div className="event-description">
            <h3>Event Description</h3>
            <p>{event.description || "Description not available for this event."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
