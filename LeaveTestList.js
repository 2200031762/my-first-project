import React from 'react';

const LeaveTestList = () => {
  // Enhanced leave test data with more information
  const leaveTests = [
    { id: 1, name: 'Leave Test 1', date: '2024-03-15', duration: '3 days', status: 'Approved' },
    { id: 2, name: 'Leave Test 2', date: '2024-03-20', duration: '2 days', status: 'Pending' },
    { id: 3, name: 'Leave Test 3', date: '2024-03-25', duration: '1 day', status: 'Rejected' },
    { id: 4, name: 'Leave Test 4', date: '2024-04-01', duration: '4 days', status: 'Approved' },
    { id: 5, name: 'Leave Test 5', date: '2024-04-10', duration: '2 days', status: 'Pending' },
    { id: 6, name: 'Leave Test 6', date: '2024-04-15', duration: '1 day', status: 'Rejected' },
    { id: 7, name: 'Leave Test 7', date: '2024-04-20', duration: '3 days', status: 'Approved' },
    { id: 8, name: 'Leave Test 8', date: '2024-04-25', duration: '2 days', status: 'Pending' },
    { id: 9, name: 'Leave Test 9', date: '2024-05-01', duration: '1 day', status: 'Rejected' },
    { id: 10, name: 'Leave Test 10', date: '2024-05-10', duration: '4 days', status: 'Approved' },
    // Add more leave tests as needed
  ];

  return (
    <div className="leave-test-list">
      <h2 style={{ color: '#333', fontWeight: 'bold' }}>Leave Test List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveTests.map((test) => (
            <tr key={test.id}>
              <td>{test.name}</td>
              <td>{test.date}</td>
              <td>{test.duration}</td>
              <td>{test.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTestList;
