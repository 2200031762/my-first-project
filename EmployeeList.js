import React, { useState } from 'react';

const EmployeeList = () => {
  // Sample employee data
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager' },
    { id: 3, name: 'Michael Johnson', position: 'UI/UX Designer' },
    { id: 4, name: 'Emily Brown', position: 'Frontend Developer' },
    { id: 5, name: 'David Wilson', position: 'Backend Developer' },
    { id: 6, name: 'Sophia Lee', position: 'Data Analyst' },
    { id: 7, name: 'Matthew Martinez', position: 'Marketing Specialist' },
    { id: 8, name: 'Olivia Taylor', position: 'HR Manager' },
    { id: 9, name: 'Daniel Anderson', position: 'Finance Analyst' },
    { id: 10, name: 'Isabella Garcia', position: 'Graphic Designer' },
    // Add more employees as needed
  ]);

  // State for form input fields
  const [formData, setFormData] = useState({ name: '', position: '' });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle employee addition
  const addEmployee = () => {
    if (formData.name && formData.position) {
      const newEmployee = { id: employees.length + 1, ...formData };
      setEmployees([...employees, newEmployee]);
      // Reset form data
      setFormData({ name: '', position: '' });
    }
  };

  // Function to handle employee deletion
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-list">
      <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>Employee List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {employees.map((employee) => (
          <li key={employee.id} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ marginRight: '10px', color: '#111', fontWeight: 'bold' }}>{employee.name}</span>
                <span style={{ color: '#333', fontSize: '14px', fontWeight: 'bold' }}>{employee.position}</span>
              </div>
              <button onClick={() => deleteEmployee(employee.id)} style={{ backgroundColor: '#8a0000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Form for adding new employee */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#333', fontWeight: 'bold' }}>Add Employee</h3>
        <form onSubmit={(e) => { e.preventDefault(); addEmployee(); }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
            <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
            <button type="submit" style={{ backgroundColor: '#8a0000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeList;
