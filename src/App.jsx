import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";
import EventsContainer from "./components/EventsContainer";
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import TicketSummary from "./components/TicketSummary";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { AuthContext, AuthProvider } from "./AuthContext";
import FilterSection from "./FilterSection";

const upcomingEvents = [
  {
    id: "1",
    name: "The Uhuru Cup",
    location: "Ngong Race Course",
    date: "2024-12-08T00:00:00Z",
    prices: { children: "KES 500", adults: "KES 1000", group: "KES 4000" },
    image: "/images/event1.jpeg",
  },
  {
    id: "2",
    name: "Murima Sundowner",
    location: "Kisementi Gardens, Ngecha Limuru",
    date: "2024-12-14",
    prices: { adults: "KES 700" },
    image: "/images/event2.jpeg",
    description: "Step into a serene, cultural haven with our Kikuyu Park & Chill Sundowner...",
  },
  {
    id: "3",
    name: "Sepetuka",
    location: "Sarit Expo Center",
    date: "2024-12-20",
    prices: { children: "KES 200", adults: "KES 500", group: "KES 1500" },
    image: "/images/event3.png",
  },
];

const pastEvents = [];

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn, isHydrated } = React.useContext(AuthContext);

  if (!isHydrated) {
    return <div>Loading...</div>; 
  }

  return isLoggedIn ? element : <Navigate to="/login" />;
};

const AllEvents = () => (
  <>
    <Header />
    <FilterSection />
    <MainContent />
    <EventsContainer events={upcomingEvents} showMoreButton={false} />
    <Footer />
  </>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutUs />
              <FilterSection />
              <MainContent />
              <EventsContainer events={upcomingEvents} showMoreButton={true} />
              <Footer />
            </>
          }
        />

        {/* All Events Page */}
        <Route path="/all-events" element={<AllEvents />} />

        {/* Event Details */}
        <Route
          path="/event/:id"
          element={
            <>
              <Header />
              <EventDetails events={[...upcomingEvents, ...pastEvents]} />
              {/* No Footer */}
            </>
          }
        />

        {/* Ticket Summary - Protected */}
        <Route
          path="/ticketsummary"
          element={
            <>
              <Header />
              <ProtectedRoute element={<TicketSummary />} />
              <Footer />
            </>
          }
        />

        {/* Login and Signup */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Signup />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
