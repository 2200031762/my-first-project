import React, { useState } from 'react';

const LeaveBalance = () => {
  const [leaveBalances, setLeaveBalances] = useState([
    { id: 1, type: 'Annual Leave', days: 20 },
    { id: 2, type: 'Sick Leave', days: 10 },
    { id: 3, type: 'Maternity Leave', days: 15 },
    { id: 4, type: 'Paternity Leave', days: 5 },
    { id: 5, type: 'Casual Leave', days: 12 },
    { id: 6, type: 'Family Care Leave', days: 8 },
    { id: 7, type: 'Study Leave', days: 10 },
    { id: 8, type: 'Unpaid Leave', days: 0 }, // Assuming 0 days initially
    { id: 9, type: 'Special Leave', days: 5 },
    { id: 10, type: 'Emergency Leave', days: 3 },
    // Add more leave balance details as needed
  ]);

  const [formData, setFormData] = useState({
    type: '',
    days: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update leave balance
      const updatedBalances = leaveBalances.map((balance) =>
        balance.id === editId ? { ...balance, ...formData } : balance
      );
      setLeaveBalances(updatedBalances);
    } else {
      // Add new leave balance
      const newId = leaveBalances.length + 1;
      const newBalance = { id: newId, ...formData };
      setLeaveBalances([...leaveBalances, newBalance]);
    }
    setFormData({ type: '', days: '' });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (id) => {
    const balanceToEdit = leaveBalances.find((balance) => balance.id === id);
    setFormData({ type: balanceToEdit.type, days: balanceToEdit.days });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedBalances = leaveBalances.filter((balance) => balance.id !== id);
    setLeaveBalances(updatedBalances);
  };

  return (
    <div className="leave-balance" style={{ backgroundColor: 'darkblue', color: 'white', padding: '20px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Leave Balance</h2>
      <div className="balance-details">
        {leaveBalances.map((balance) => (
          <div key={balance.id} style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>{balance.type}: {balance.days} days</p>
            <button style={{ backgroundColor: 'darkgrey', color: 'white', marginRight: '5px' }} onClick={() => handleEdit(balance.id)}>Edit</button>
            <button style={{ backgroundColor: 'darkred', color: 'white' }} onClick={() => handleDelete(balance.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h3 style={{ fontWeight: 'bold', marginTop: '20px' }}>Add or Edit Leave Balance</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} style={{ marginRight: '10px' }} />
        <input type="number" name="days" placeholder="Days" value={formData.days} onChange={handleChange} style={{ marginRight: '10px' }} />
        <button type="submit" style={{ backgroundColor: 'darkgreen', color: 'white' }}>{isEditing ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default LeaveBalance;
