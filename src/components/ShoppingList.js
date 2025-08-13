import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
  const [choosenCategory, setChoosenCategory] = useState("All");
  function onSelect(selectedCategory) {
    setChoosenCategory(selectedCategory);
  }
  const itemsToDisplay = items.filter((item) => {
    if (choosenCategory === "All") return true;

    return item.category === choosenCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onSelect={onSelect}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;