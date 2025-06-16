import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <header style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
};

export default Header;
