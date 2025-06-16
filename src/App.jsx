import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import QRDisplay from "./components/QRDisplay";
import SelectMode from "./components/SelectMode";

function App() {
  const [theme, setTheme] = useState("light");
  const [qrData, setQrData] = useState([]);
  const [mode, setMode] = useState(""); // "individual" or "combined"
  const [pendingInputs, setPendingInputs] = useState(null); // store inputs until mode is selected

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleGenerate = (inputs) => {
    setPendingInputs(inputs);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    if (selectedMode === "combined") {
      setQrData([pendingInputs.join(" | ")]);
    } else {
      setQrData(pendingInputs);
    }
    setPendingInputs(null); // clear modal
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <Header theme={theme} setTheme={setTheme} />
      <h1 style={{ textAlign: "center" }}>QR Code Generator</h1>
      <InputField onGenerate={handleGenerate} />
      {qrData.length > 0 && <QRDisplay qrData={qrData} mode={mode} />}
      {pendingInputs && <SelectMode onSelect={handleModeSelect} />}
    </div>
  );
}

export default App;
