import React from 'react';
import EventsContainer from './EventsContainer';// Assuming Ticket is a separate component

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="search-bar">
        <input type="text" placeholder="Search events..." />
        <button>Search</button>  
      </div>  
    </div>
    
  );
};

export default MainContent;
