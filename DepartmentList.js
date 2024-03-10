import React, { useState } from 'react';

const DepartmentList = () => {
  // Dummy department data
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Department 1', manager: 'John Doe', employees: 20 },
    { id: 2, name: 'Department 2', manager: 'Jane Smith', employees: 15 },
    { id: 3, name: 'Department 3', manager: 'Michael Johnson', employees: 25 },
    { id: 4, name: 'Department 4', manager: 'Emily Brown', employees: 18 },
    { id: 5, name: 'Department 5', manager: 'David Wilson', employees: 22 },
    { id: 6, name: 'Department 6', manager: 'Sophia Lee', employees: 17 },
    { id: 7, name: 'Department 7', manager: 'Matthew Martinez', employees: 19 },
    { id: 8, name: 'Department 8', manager: 'Olivia Taylor', employees: 16 },
    { id: 9, name: 'Department 9', manager: 'Daniel Anderson', employees: 21 },
    { id: 10, name: 'Department 10', manager: 'Isabella Garcia', employees: 24 },
    // Add more departments as needed
  ]);

  // Function to handle department removal
  const handleRemoveDepartment = (id) => {
    const updatedDepartments = departments.filter(department => department.id !== id);
    setDepartments(updatedDepartments);
  };

  return (
    <div className="department-list">
      <h2 style={{ color: 'darkgrey' }}>Department List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Department Name</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Manager</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>No. of Employees</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.name}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.manager}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.employees}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>
                <button style={{ backgroundColor: 'darkorange', color: 'white', marginRight: '4px' }} onClick={() => handleRemoveDepartment(department.id)}>Remove</button>
                {/* Add an update button/icon and its functionality here */}
                <button style={{ backgroundColor: 'darkgreen', color: 'white' }}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
