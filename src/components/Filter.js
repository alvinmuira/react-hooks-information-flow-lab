import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    const value = event.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  }

  return (
    <div className="Filter">
      <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option> {/* ✅ changed back */}
      </select>
    </div>
  );
}

export default Filter;
