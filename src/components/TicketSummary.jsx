import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaPaypal, FaCcVisa } from "react-icons/fa"; // Add payment icons
import "./TicketSummary.css";

const TicketSummary = () => {
  const { state } = useLocation(); // Get the passed data from the previous page
  const navigate = useNavigate();

  // Redirect or show an error if no data is found
  if (!state) {
    return <p>No ticket information available.</p>;
  }

  const { eventName, eventImage, tickets, totalCost } = state;

  // State to handle form input
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert("Ticket purchase details submitted. Email and SMS confirmation sent!");
    // Add logic here to handle payment and confirmation

    // Optionally, redirect to another page (e.g., home or confirmation page)
    navigate("/");
  };

  return (
    <div className="ticket-summary-container">
      <h1>Ticket Purchase Summary</h1>

      {/* Event and Ticket Details */}
      <div className="ticket-summary-top">
        <img
          src={eventImage || "/event2.png"}
          alt={eventName || "Event"}
          className="event-thumbnail"
        />
        <div className="ticket-summary-details">
          <p><strong>Event Name:</strong> {eventName}</p>
          <h4>Tickets:</h4>
          <ul>
            {tickets.map((ticket, index) => (
              <li key={index}>
                {ticket.ticketType.charAt(0).toUpperCase() + ticket.ticketType.slice(1)}: {ticket.quantity} x Ksh {ticket.price}
              </li>
            ))}
          </ul>
          <p><strong>Total Price:</strong> Ksh {totalCost}</p>
        </div>
      </div>

      {/* User Details Form */}
      <form onSubmit={handleSubmit} className="user-details-form">
        <div className="form-field">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </form>

      {/* Payment Options */}
      <div className="payment-options">
        <p>Select one payment method:</p>
        <div className="payment-methods">
          <div className="payment-option">
            <img
              src="/public/images/mpesa icon.png"
              alt="Mpesa"
              style={{ width: "40px", height: "40px" }}
            />
            <label htmlFor="mpesa">MPesa</label>
            <input
              id="mpesa"
              type="radio"
              name="paymentMethod"
              value="Mpesa"
              onChange={handleChange}
            />
          </div>
          <div className="payment-option">
            <FaPaypal size={40} color="#003b57" />
            <label htmlFor="paypal">PayPal</label>
            <input
              id="paypal"
              type="radio"
              name="paymentMethod"
              value="Paypal"
              onChange={handleChange}
            />
          </div>
          <div className="payment-option">
            <FaCcVisa size={40} color="#1a2f6d" />
            <label htmlFor="visa">Visa Card</label>
            <input
              id="visa"
              type="radio"
              name="paymentMethod"
              value="Visa"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="summary-actions">
        <button
          className="buy-again-button"
          onClick={() => navigate(-1)} // Navigate back to the previous page
        >
          Buy Again
        </button>
        <button
          className="confirm-purchase-button"
          onClick={handleSubmit}
          disabled={!formData.paymentMethod}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default TicketSummary;
