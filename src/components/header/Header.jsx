import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <h1 className="app-title">FactWise Employee Analytics</h1>
        <p className="app-subtitle">
          AG Grid scalable dashboard — optimized for enterprise datasets.
        </p>
      </div>
      <div className="app-badge">AG Grid · React</div>
    </header>
  );
}
