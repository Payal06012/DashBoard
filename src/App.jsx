import React, { useState, useMemo, useCallback } from "react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import Header from "./components/header/Header";
import SummaryCard from "./components/summary/SummaryCard";
import SearchBar from "./components/search/SearchBar";
import EmployeeGrid from "./components/grid/EmployeeGrid";

import columnDefs from "./utils/columnDefs";
import employeesData from "./data/employees.json";

import "./styles/App.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function App() {
  const [rowData, setRowData] = useState(employeesData.employees || []);
  const [gridApi, setGridApi] = useState(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [noResults, setNoResults] = useState(false);

  // ---------- CRUD ----------
  const deleteEmployee = (id) => {
    setRowData((prev) => prev.filter((emp) => emp.id !== id));
  };

  const editEmployee = (employee) => {
    const newName = prompt("Enter new name", employee.firstName);
    if (!newName) return;

    setRowData((prev) =>
      prev.map((emp) =>
        emp.id === employee.id ? { ...emp, firstName: newName } : emp
      )
    );
  };

  const addEmployee = () => {
    const firstName = prompt("First Name");
    const lastName = prompt("Last Name");
    if (!firstName || !lastName) return;

    const newEmployee = {
      id: rowData.length + 1,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName}@company.com`,
      department: "New",
      position: "New Employee",
      salary: 50000,
      hireDate: "2024-01-01",
      age: 25,
      location: "Unknown",
      performanceRating: 4.0,
      projectsCompleted: 0,
      isActive: true,
      skills: ["New"],
      manager: null,
    };

    setRowData((prev) => [...prev, newEmployee]);
  };

  // ---------- GRID ----------
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  }, []);

  const handleQuickFilter = (e) => {
    const value = e.target.value;
    setQuickFilter(value);

    if (gridApi) {
      gridApi.setGridOption("quickFilterText", value);
      setNoResults(gridApi.getDisplayedRowCount() === 0);
    }
  };

  const handleSearchClick = () => {
    if (gridApi) {
      gridApi.setGridOption("quickFilterText", quickFilter);
      setNoResults(gridApi.getDisplayedRowCount() === 0);
    }
  };

  const clearSearch = () => {
    setQuickFilter("");
    if (gridApi) gridApi.setGridOption("quickFilterText", "");
    setNoResults(false);
  };

  // ---------- STATS ----------
  const stats = useMemo(() => {
    const total = rowData.length;
    const departments = new Set(rowData.map((e) => e.department)).size;
    const avgRating = (
      rowData.reduce((sum, e) => sum + e.performanceRating, 0) / total
    ).toFixed(1);
    const activePercent = Math.round(
      (rowData.filter((e) => e.isActive).length / total) * 100
    );

    return { total, departments, avgRating, activePercent };
  }, [rowData]);

  return (
    <div className="app-container">
      <Header />

      {/* Summary Cards */}
      <section className="summary-section">
        <SummaryCard label="Total Employees" value={stats.total} sub="Records" />
        <SummaryCard label="Departments" value={stats.departments} sub="Groups" />
        <SummaryCard label="Avg. Performance" value={stats.avgRating} sub="/5.0" />
        <SummaryCard label="Active Employees" value={`${stats.activePercent}%`} />
      </section>

      {/* Toolbar */}
      <section className="toolbar">
        <div>
          <h2 className="section-title">Employee Table</h2>
          <p className="section-subtitle">Search, filter & explore employees</p>
        </div>

        <SearchBar
          quickFilter={quickFilter}
          handleQuickFilter={handleQuickFilter}
          handleSearchClick={handleSearchClick}
          clearSearch={clearSearch}
        />

        <button className="add-btn" onClick={addEmployee}>
          ➕ Add Employee
        </button>
      </section>

      {noResults && (
        <div className="no-results">❌ No matching records found.</div>
      )}

      {/* Employee Grid */}
      <EmployeeGrid
        rowData={rowData}
        columnDefs={columnDefs(editEmployee, deleteEmployee)}
        quickFilter={quickFilter}
        onGridReady={onGridReady}
      />

      <footer className="footer">
        Built for FactWise assignment · AG Grid · React
      </footer>
    </div>
  );
}
