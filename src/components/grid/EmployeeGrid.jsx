import React from "react";
import "./EmployeeGrid.css";
import { AgGridReact } from "ag-grid-react";

export default function EmployeeGrid({
  rowData,
  columnDefs,
  quickFilter,
  onGridReady,
}) {
  return (
    <div className="ag-theme-quartz ag-grid-container">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        quickFilterText={quickFilter}
        onGridReady={onGridReady}
        pagination={true}
        paginationPageSize={10}
        animateRows={true}
        rowSelection="multiple"
        suppressRowClickSelection={true}
      />
    </div>
  );
}
