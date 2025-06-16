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
          <QRCodeCanvas
            id={`qr-${index}`}
            value={data}
            size={200}
            level="H"
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
