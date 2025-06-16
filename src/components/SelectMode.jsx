import React from "react";

const SelectMode = ({ onSelect }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h2>Select the type:</h2>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => onSelect("combined")}>Single QR</button>
          <button onClick={() => onSelect("individual")}>Individual QR</button>
        </div>
      </div>
    </div>
  );
};

export default SelectMode;
