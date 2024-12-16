import React from "react";
import "./FilterSection.css"; // Assuming you will add styling here

const FilterSection = () => {
  return (
    <div className="filter-section">
      <div className="filter-header">
        
        
      </div>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Date</label>
          <div className="date-range">
            <input type="date" name="start-date" placeholder="Start" />
            <span>→</span>
            <input type="date" name="end-date" placeholder="End" />
          </div>
        </div>
        <div className="filter-group">
          <label htmlFor="event-type">Event Type</label>
          <select id="event-type" name="event-type">
            <option value="all">All</option>
            <option value="concerts">Concerts</option>
            <option value="sports">Sports</option>
            <option value="theater">Theater</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort-by">Sort By</label>
          <select id="sort-by" name="sort-by">
            <option value="upcoming">Upcoming</option>
            <option value="popular">Popular</option>
            <option value="new">New</option>
          </select>
        </div>
        <button className="filter-button">Filter</button>
      </div>
    </div>
  );
};

export default FilterSection;
