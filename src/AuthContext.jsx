import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// AuthContext Provider
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false); // New state to manage hydration

  // Check for stored token and user data on app initialization
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        // Optional: Verify token validity or expiration here
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setIsHydrated(true); // Mark as hydrated
  }, []);

  // Login function to set state and save to localStorage
  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function to clear state and localStorage
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, isHydrated }}>
      {children}
    </AuthContext.Provider>
  );
};
