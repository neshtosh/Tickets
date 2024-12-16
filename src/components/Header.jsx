// src/components/Header.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../AuthContext"; // Import AuthContext for user info and login/logout methods

function Header() {
  const { user, logout } = useContext(AuthContext); // Access user info and logout function
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const toggleUserMenu = () => setUserMenuOpened((prev) => !prev);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="contact-info">
        <p>
          <a
            href="tel:+254720870700"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            📞 +254 720 870 700
          </a>
        </p>
        <p>
          <a
            href="mailto:info@tikiti.co.ke?subject=Inquiry&body=Hello Tikiti Team,"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            ✉️ info@tikiti.co.ke
          </a>
        </p>
      </div>
      <div className="auth-buttons">
        {!user ? (
          <>
            <Link to="/signup">
              <button className="button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="button">Log In</button>
            </Link>
          </>
        ) : (
          <div className="user-menu">
            <button className="button" onClick={toggleUserMenu}>
              {user.name || "User"}
            </button>
            {userMenuOpened && (
              <div className="user-menu-dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={logout}>Log Out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
