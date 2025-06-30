import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRDisplay = ({ qrData, mode }) => {
  const downloadQR = (index) => {
    const canvas = document.getElementById(`qr-${index}`);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qr-code-${index + 1}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      {qrData.map((data, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "2rem",
          }}
        >
          {mode === "individual" && (
            <div style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: "bold" }}>
              {index + 1}. {data}
            </div>
          )}
          {mode === "combined" && (
            <div style={{ marginBottom: "0.5rem", fontSize: "0.9rem", maxWidth: "300px", margin: "0 auto" }}>
              <strong>📋 Combined Text QR Code</strong>
              <div style={{ 
                background: "#f0f8ff", 
                padding: "0.8rem", 
                borderRadius: "8px", 
                marginTop: "0.5rem",
                fontSize: "0.8rem",
                border: "1px solid #e0e0e0"
              }}>
                <div style={{ marginBottom: "0.5rem", fontWeight: "bold", color: "#333" }}>
                  📱 When scanned, users will see:
                </div>
                <div style={{ 
                  background: "#fff", 
                  padding: "0.5rem", 
                  borderRadius: "4px", 
                  fontSize: "0.7rem",
                  textAlign: "left",
                  whiteSpace: "pre-line",
                  fontFamily: "monospace",
                  border: "1px solid #ddd",
                  maxHeight: "120px",
                  overflow: "auto"
                }}>
                  {data.length > 250 ? data.substring(0, 250) + '...' : data}
                </div>
                <div style={{ marginTop: "0.5rem", color: "#666", fontSize: "0.75rem" }}>
                  📱 Long press any link to copy • Better spacing for readability
                </div>
              </div>
            </div>
          )}
          <QRCodeCanvas
            id={`qr-${index}`}
            value={data}
            size={250}
            level="M"
            includeMargin={true}
          />
          <br />
          <button onClick={() => downloadQR(index)} style={{ marginTop: "0.5rem" }}>
            ⬇️ Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default QRDisplay;
