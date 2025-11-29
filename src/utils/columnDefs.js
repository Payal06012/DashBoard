export default function columnDefs(editEmployee, deleteEmployee) {
  return [
    {
      headerName: "ID",
      field: "id",
      maxWidth: 90,
      sortable: true,
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
      headerName: "Performance",
      field: "performanceRating",
      flex: 1,
      minWidth: 160,
      cellRenderer: (params) => {
        const rating = params.value;
        const width = (rating / 5) * 100;
        let color = "#60a5fa";

        if (rating >= 4.5) color = "#4ade80";
        else if (rating < 4) color = "#facc15";
        else if (rating < 3) color = "#f87171";

        return (
          <div style={{ display: "flex", gap: "8px" }}>
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
