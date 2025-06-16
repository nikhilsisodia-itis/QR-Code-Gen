import React, { useState } from "react";

const InputField = ({ onGenerate }) => {
  const [inputs, setInputs] = useState([""]);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  const handleGenerateClick = () => {
    const nonEmptyInputs = inputs.filter((i) => i.trim() !== "");
    if (nonEmptyInputs.length === 0) return alert("Please enter at least one value");
    onGenerate(nonEmptyInputs);
  };

  return (
    <div style={{ padding: "1rem" }}>
      {inputs.map((input, index) => (
        <div key={index} style={{ marginBottom: "0.5rem" }}>
          <input
            type="text"
            placeholder={`Input ${index + 1}`}
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={addInputField}>➕ Add</button>
        <button onClick={handleGenerateClick}>⚙️ Generate QR</button>
      </div>
    </div>
  );
};

export default InputField;
