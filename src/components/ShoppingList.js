import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [chosenCategory, setChosenCategory] = useState("All");

  function handleCategoryChange(selectedCategory) {
    setChosenCategory(selectedCategory);
  }

  const itemsToDisplay = items.filter((item) => {
    if (chosenCategory === "All") return true;
    return item.category === chosenCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} /> {/* ✅ fixed */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
