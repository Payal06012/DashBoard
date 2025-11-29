import React from "react";
import "./SearchBar.css";

export default function SearchBar({
  quickFilter,
  handleQuickFilter,
  handleSearchClick,
  clearSearch,
}) {
  return (
    <div className="search-wrapper">
      <span className="search-icon" onClick={handleSearchClick}>🔍</span>

      <input
        type="text"
        value={quickFilter}
        className="search-input"
        placeholder="Search by name, department, email..."
        onChange={handleQuickFilter}
      />

      {quickFilter && (
        <button className="clear-btn" onClick={clearSearch}>✖</button>
      )}
    </div>
  );
}
