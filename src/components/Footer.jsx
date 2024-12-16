import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 onClick={() => toggleDropdown("contact")} className="footer-title">
            Contact Us
          </h4>
          {activeDropdown === "contact" && (
            <ul className="dropdown-menu">
              <li>Email: info@tikiti.com</li>
              <li>Phone: +254 790 229 229</li>
              <li className="social-icons">
                <a href="#" className="icon">Facebook</a>
                <a href="#" className="icon">Twitter</a>
                <a href="#" className="icon">Instagram</a>
              </li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h4 onClick={() => toggleDropdown("about")} className="footer-title">
            About Us
          </h4>
          {activeDropdown === "about" && (
            <ul className="dropdown-menu">
              <li>About Us</li>
              <li>Services</li>
              <li>Rules & Terms</li>
              <li>Blog</li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h4 onClick={() => toggleDropdown("services")} className="footer-title">
            Services
          </h4>
          {activeDropdown === "services" && (
            <ul className="dropdown-menu">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Event Management</li>
              <li>Event Equipment Booking</li>
              <li>Open Dispute</li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h4 onClick={() => toggleDropdown("company")} className="footer-title">
            Company
          </h4>
          {activeDropdown === "company" && (
            <ul className="dropdown-menu">
              <li>Login</li>
              <li>Register</li>
              <li>Account Settings</li>
              <li>My Orders</li>
            </ul>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tikiti™. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Email Us</a>
          <a href="#">Call Us</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
