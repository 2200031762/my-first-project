import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message', timestamp: '2024-03-10 09:00:00', status: 'unread' },
    { id: 2, message: 'Your leave request has been approved', timestamp: '2024-03-09 14:30:00', status: 'read' },
    { id: 3, message: 'Reminder: Team meeting tomorrow', timestamp: '2024-03-08 18:00:00', status: 'unread' },
    { id: 4, message: 'Your project deadline is approaching', timestamp: '2024-03-07 10:15:00', status: 'read' },
    { id: 5, message: 'New task assigned: Complete by end of week', timestamp: '2024-03-06 13:45:00', status: 'unread' },
    { id: 6, message: 'Congratulations! You have been promoted', timestamp: '2024-03-05 11:20:00', status: 'read' },
    { id: 7, message: 'Reminder: Submit monthly report by Friday', timestamp: '2024-03-04 16:30:00', status: 'unread' },
    { id: 8, message: 'Update your profile information', timestamp: '2024-03-03 08:45:00', status: 'read' },
    // Add more notifications as needed
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, status: 'read' };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notifications-container" style={{ backgroundColor: '#FF69B4', color: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '20px' }}>Notifications</h2>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className={`notification-item ${notification.status}`} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ff007f', borderRadius: '5px' }}>
            <span className="notification-bell-icon" style={{ marginRight: '10px' }}>🔔</span>
            <div className="notification-details">
              <span className="notification-message" style={{ fontWeight: 'bold' }}>{notification.message}</span>
              <span className="notification-timestamp">{notification.timestamp}</span>
              {notification.status === 'unread' && (
                <button onClick={() => markAsRead(notification.id)} style={{ marginLeft: '10px', backgroundColor: '#FF1493', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Mark as Read</button>
              )}
              <button onClick={() => deleteNotification(notification.id)} style={{ marginLeft: '10px', backgroundColor: '#FF1493', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

