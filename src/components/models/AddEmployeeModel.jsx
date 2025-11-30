import React, { useState } from "react";
import "./AddEmployeeModel.css";

export default function AddEmployeeModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    salary: "",
    hireDate: "",
    age: "",
    location: "",
    performanceRating: "",
    projectsCompleted: "",
    isActive: true,
    skills: "",
    manager: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName) {
      alert("Please enter first & last name.");
      return;
    }

    const finalEmployee = {
      ...formData,
      id: Date.now(),
      skills: formData.skills.split(",").map((s) => s.trim()),
      salary: Number(formData.salary),
      age: Number(formData.age),
      performanceRating: Number(formData.performanceRating),
      projectsCompleted: Number(formData.projectsCompleted),
    };

    onSave(finalEmployee);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Employee</h2>

        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>

          <div>
            <label>Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>

          <div>
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <label>Department</label>
            <input name="department" value={formData.department} onChange={handleChange} />
          </div>

          <div>
            <label>Position</label>
            <input name="position" value={formData.position} onChange={handleChange} />
          </div>

          <div>
            <label>Salary</label>
            <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
          </div>

          <div>
            <label>Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>

          <div>
            <label>Location</label>
            <input name="location" value={formData.location} onChange={handleChange} />
          </div>

          <div>
            <label>Hire Date</label>
            <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} />
          </div>

          <div>
            <label>Performance Rating</label>
            <input
              type="number"
              step="0.1"
              name="performanceRating"
              value={formData.performanceRating}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Projects Completed</label>
            <input
              type="number"
              name="projectsCompleted"
              value={formData.projectsCompleted}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Skills (comma separated)</label>
            <input name="skills" value={formData.skills} onChange={handleChange} />
          </div>

          <div>
            <label>Manager</label>
            <input name="manager" value={formData.manager} onChange={handleChange} />
          </div>

        </div>

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSubmit}>Add Employee</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
