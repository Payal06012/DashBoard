import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <h1 className="app-title">Employee Insights & Management Dashboard</h1>
        <p className="app-subtitle">
          A centralized platform to view, analyze, and manage workforce data across departments.
        </p>
      </div>
      <div className="app-badge">FactWise</div>
    </header>
  );
}
