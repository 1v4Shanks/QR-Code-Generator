import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerateQrCode() {
    setQrCode(inputValue);
    setInputValue("");
  }

  return (
    <div className="container">
      <div className="code-container">
        <h1> QR code generator</h1>
        <div className="input-box">
        <input
          type="text"
          name="qr-code"
          value={inputValue}
          placeholder="Enter your value here"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn"
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        </div>
        <div>
          <QRCode id="qr-code" value={qrCode} />
        </div>
      </div>
    </div>
  );
}
