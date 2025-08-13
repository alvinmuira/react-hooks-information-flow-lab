import React from "react"
import { useState } from "react";

function Filter({ onSelect }) {
      const [selectedCategory, setSelectedCategory] = useState("All");
    
      function handleCategoryChange(event) {
        const value = event.target.value;
        setSelectedCategory(value);
        onSelect(value);
      }
    
    return(
        <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter