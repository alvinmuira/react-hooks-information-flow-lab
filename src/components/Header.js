import React from "react"

function Header({ isDarkMode, setIsDarkMode, onDarkModeClick }) {
  function handleClick() {
    if (onDarkModeClick) {
      onDarkModeClick();
    } else {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  }

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;