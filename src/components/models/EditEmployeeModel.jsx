import React, { useState, useEffect } from "react";
import "./EditEmployeeModel.css";

export default function EditEmployeeModal({ employee, onClose, onSave }) {
  const [formData, setFormData] = useState(employee);

  useEffect(() => {
    setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  if (!employee) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Employee</h2>

        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Position</label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Salary</label>
            <input
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Age</label>
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Performance Rating</label>
            <input
              name="performanceRating"
              type="number"
              step="0.1"
              value={formData.performanceRating}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSubmit}>Save Changes</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
