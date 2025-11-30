import React from "react";
import "./SummaryCard.css";

export default function SummaryCard({ label, value, sub }) {
  return (
    <div className="card">
      <p className="card-label">{label}</p>
      <p className="card-value">{value}</p>
      {sub && <p className="card-sub">{sub}</p>}
    </div>
  );
}
