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
      // Use the first link as primary, add others as a simple text format
      const primaryLink = pendingInputs[0].startsWith('http') ? pendingInputs[0] : 'https://' + pendingInputs[0];
      
      if (pendingInputs.length === 1) {
        // If only one link, just use it directly
        setQrData([primaryLink]);
      } else {
        // Multiple links: create a well-formatted text list with proper spacing
        const allLinks = pendingInputs.map((link, index) => {
          const fullUrl = link.startsWith('http') ? link : 'https://' + link;
          return `${index + 1}. ${fullUrl}`;
        }).join('\n\n'); // Double line break between each link
        
        const combinedText = `📋 Multiple Links:

${allLinks}

💡 Tip: Long press on any link above to copy and visit it`;
        
        console.log("Combined format:", combinedText);
        setQrData([combinedText]);
      }
    } else {
      // Individual mode: ensure all links have proper protocol
      const formattedLinks = pendingInputs.map(link => 
        link.startsWith('http') ? link : 'https://' + link
      );
      setQrData(formattedLinks);
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
