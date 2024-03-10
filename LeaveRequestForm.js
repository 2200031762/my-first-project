import React, { useState } from 'react';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    leaveType: '',
    emergencyContact: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      startDate: '',
      endDate: '',
      reason: '',
      leaveType: '',
      emergencyContact: '',
      contactNumber: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#FFC0CB', color: '#333', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333' }}>Leave Type:</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            style={{ marginLeft: '10px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          >
            <option value="">Select Leave Type</option>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="unpaid">Unpaid Leave</option>
            {/* Add more leave types as needed */}
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333' }}>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            style={{ marginLeft: '10px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333' }}>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            style={{ marginLeft: '10px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333' }}>Reason:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            style={{ marginLeft: '10px', width: '100%', minHeight: '100px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333' }}>Emergency Contact:</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            style={{ marginLeft: '10px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#333' }}>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={{ marginLeft: '10px', backgroundColor: '#FF69B4', color: 'white', padding: '5px' }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;

