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
        <h2>Select QR Code Type:</h2>
        <p style={{ marginBottom: "1.5rem", fontSize: "0.9rem", color: "var(--text-color-secondary)" }}>
          Choose how you want to generate QR codes for your multiple inputs:
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexDirection: "column" }}>
          <button 
            onClick={() => onSelect("individual")}
            style={{ padding: "1rem", fontSize: "1rem" }}
          >
            📱 Individual QR Codes
            <div style={{ fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.8 }}>
              Generate separate QR codes for each input
            </div>
          </button>
          <button 
            onClick={() => onSelect("combined")}
            style={{ padding: "1rem", fontSize: "1rem" }}
          >
            📋 Combined List
            <div style={{ fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.8 }}>
              Create one QR with all links listed (copy-paste friendly)
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectMode;
