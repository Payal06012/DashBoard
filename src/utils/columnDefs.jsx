

export default function columnDefs(editEmployee, deleteEmployee) {
  return [
    {
      headerName: "ID",
      field: "id",
      maxWidth: 90,
      sortable: true,
      filter: "agNumberColumnFilter",
    },

    {
      headerName: "Employee",
      field: "firstName",
      flex: 1.5,
      minWidth: 220,
      cellRenderer: (params) => {
        const { firstName, lastName, email } = params.data;
        return (
          <div className="employee-cell">
            <div className="employee-name">{firstName} {lastName}</div>
            <div className="employee-email">{email}</div>
          </div>
        );
      },
    },

    {
      headerName: "Department",
      field: "department",
      flex: 1,
      minWidth: 140,
      filter: true,
    },

    {
      headerName: "Position",
      field: "position",
      flex: 1.2,
      minWidth: 160,
      filter: true,
    },

    {
      headerName: "Location",
      field: "location",
      flex: 1,
      minWidth: 130,
      filter: true,
    },

    {
      headerName: "Manager",
      field: "manager",
      flex: 1,
      minWidth: 140,
      valueFormatter: (params) => params.value || "—",
    },

    {
      headerName: "Salary",
      field: "salary",
      flex: 0.9,
      minWidth: 130,
      filter: "agNumberColumnFilter",
      valueFormatter: (params) =>
        params.value ? `$${params.value.toLocaleString()}` : "",
    },

    {
      headerName: "Hire Date",
      field: "hireDate",
      flex: 0.9,
      minWidth: 130,
      filter: "agDateColumnFilter",
    },

    {
      headerName: "Age",
      field: "age",
      flex: 0.6,
      minWidth: 90,
      filter: "agNumberColumnFilter",
    },

    // ⭐ Performance with horizontal bar
    {
      headerName: "Performance",
      field: "performanceRating",
      flex: 1,
      minWidth: 160,
      sortable: true,
      filter: "agNumberColumnFilter",

      cellRenderer: (params) => {
        const rating = params.value;
        const width = (rating / 5) * 100;

        let color = "#60a5fa";   
        if (rating >= 4.5) color = "#4ade80";       
        else if (rating < 4) color = "#facc15";    
        else if (rating < 3) color = "#f87171";    

        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="performance-bar-container">
              <div
                className="performance-bar"
                style={{ width: `${width}%`, background: color }}
              ></div>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600 }}>
              {rating.toFixed(1)}
            </span>
          </div>
        );
      },
    },

    {
      headerName: "Projects",
      field: "projectsCompleted",
      flex: 0.7,
      minWidth: 110,
      filter: "agNumberColumnFilter",
    },

    {
      headerName: "Status",
      field: "isActive",
      flex: 0.8,
      minWidth: 110,
      filter: true,
      valueGetter: (params) => (params.data.isActive ? "Active" : "Inactive"),
      cellRenderer: (params) => {
        const isActive = params.data.isActive;
        return (
          <span className={isActive ? "status-pill active" : "status-pill inactive"}>
            {isActive ? "Active" : "Inactive"}
          </span>
        );
      },
    },

    {
      headerName: "Skills",
      field: "skills",
      flex: 1.6,
      minWidth: 220,
      autoHeight: true,
      cellRenderer: (params) => {
        const skills = params.value || [];
        return (
          <div className="skills-chips">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        );
      },
    },

    // ⭐ ACTION buttons (Edit / Delete)
    {
      headerName: "Actions",
      field: "actions",
      minWidth: 150,
      cellRenderer: (params) => (
        <div className="action-buttons">
          <button
            className="action-edit"
            onClick={() => editEmployee(params.data)}
          >
            Edit
          </button>

          <button
            className="action-delete"
            onClick={() => deleteEmployee(params.data.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
}

// }

