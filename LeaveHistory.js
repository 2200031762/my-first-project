import React, { useState, useEffect } from 'react';

const LeaveHistory = () => {
  // State to store leave history data
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [newLeaveItem, setNewLeaveItem] = useState({ date: '', reason: '', status: '' });
  
  // Function to fetch leave history data from an API or other data source
  useEffect(() => {
    // Simulated leave history data
    const sampleLeaveHistory = [
      { id: 1, date: '2023-12-15', reason: 'Vacation', status: 'Approved' },
      { id: 2, date: '2023-11-20', reason: 'Sick Leave', status: 'Approved' },
      { id: 3, date: '2023-10-25', reason: 'Personal Leave', status: 'Pending' },
      { id: 4, date: '2023-09-18', reason: 'Family Emergency', status: 'Rejected' },
      { id: 5, date: '2023-08-10', reason: 'Study Leave', status: 'Approved' },
      { id: 6, date: '2023-07-05', reason: 'Maternity Leave', status: 'Approved' },
      { id: 7, date: '2023-06-08', reason: 'Paternity Leave', status: 'Approved' },
      { id: 8, date: '2023-05-12', reason: 'Bereavement Leave', status: 'Approved' },
      { id: 9, date: '2023-04-15', reason: 'Unpaid Leave', status: 'Approved' },
      { id: 10, date: '2023-03-20', reason: 'Emergency Leave', status: 'Pending' },
      // Add more leave history items as needed
    ];

    // Set the leave history data
    setLeaveHistory(sampleLeaveHistory);
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeaveItem({ ...newLeaveItem, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLeaveHistory = [...leaveHistory, { id: leaveHistory.length + 1, ...newLeaveItem }];
    setLeaveHistory(updatedLeaveHistory);
    setNewLeaveItem({ date: '', reason: '', status: '' }); // Reset form fields
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: 'darkblue', fontWeight: 'bold', marginBottom: '20px' }}>Leave History</h2>
      <div style={{ marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: 'darkblue', color: 'white' }}>
            <tr>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Reason</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leaveItem) => (
              <tr key={leaveItem.id}>
                <td style={{ padding: '10px', border: '1px solid darkblue' }}>{leaveItem.date}</td>
                <td style={{ padding: '10px', border: '1px solid darkblue' }}>{leaveItem.reason}</td>
                <td style={{ padding: '10px', border: '1px solid darkblue' }}>{leaveItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 style={{ color: 'darkblue', fontWeight: 'bold', marginBottom: '10px' }}>Add New Leave</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <input type="date" name="date" value={newLeaveItem.date} onChange={handleInputChange} style={{ marginRight: '10px', padding: '5px' }} required />
          <input type="text" name="reason" placeholder="Reason" value={newLeaveItem.reason} onChange={handleInputChange} style={{ marginRight: '10px', padding: '5px' }} required />
          <select name="status" value={newLeaveItem.status} onChange={handleInputChange} style={{ marginRight: '10px', padding: '5px' }} required>
            <option value="">Select Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button type="submit" style={{ backgroundColor: 'darkblue', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>Add Leave</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveHistory;
