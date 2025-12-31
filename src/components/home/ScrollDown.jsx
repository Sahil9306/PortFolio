import React from "react";
import "./home.css"; // 👈 Make sure this import is here

export default function ScrollDown() {
  return (
    <div className="scroll-container">
      <svg width="30" height="50" viewBox="0 0 40 90">
        <rect
          className="mouse-outline"
          x="5"
          y="5"
          width="40"
          height="80"
          rx="20"
          ry="20"
        />
        <circle className="scroll-wheel" cx="25" cy="25" r="4" />
      </svg>
      <p className="scroll-text">SCROLL</p>
    </div>
  );
}

