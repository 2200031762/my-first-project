import React, { useState } from 'react';
import LeaveRequestForm from './LeaveRequestForm'; // Import LeaveRequestForm component
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Notifications from './notifications';
import LeaveTestList from './LeaveTestList'; // Import LeaveTestList component
import DepartmentList from './DepartmentList';
import EmployeeList from './EmployeeList';
import LeaveBalance from './LeaveBalance'; // Import LeaveBalance component
import LeaveHistory from './LeaveHistory'; // Import LeaveHistory component
import './Dashboard.css';

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage active component

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const events = [
    {
      id: 1,
      title: 'Company Event',
      start: new Date(2024, 2, 15),
      end: new Date(2024, 2, 17),
    },
    {
      id: 2,
      title: 'Holiday',
      start: new Date(2024, 4, 1),
      end: new Date(2024, 4, 2),
    },
    // Add more events as needed
  ];

  return (
    <div className="dashboard" style={{ backgroundColor: '#b3d9ff' }}>
      <div className="top-right">
        <button className="logout-button">Logout</button>
      </div>
      <div className="left-panel" style={{ backgroundColor: '#ffcc80' }}>
        <div className="dashboard-menu">
          <span className="menu-icon">📊</span>
          Dashboard
        </div>
        <div className="dashboard-components">
          <div className="component" onClick={() => handleComponentClick('Calendar')}>
            <span className="menu-icon">📅</span>
            Calendar
          </div>
          <div className="component" onClick={() => handleComponentClick('Notifications')}>
            <span className="menu-icon">🔔</span>
            Notifications
          </div>
          <div className="component" onClick={() => handleComponentClick('DepartmentList')}>
            <span className="menu-icon">📂</span>
            Department List
          </div>
          <div className="component" onClick={() => handleComponentClick('EmployeeList')}>
            <span className="menu-icon">👨‍💼</span>
            Employee List
          </div>
          <div className="component" onClick={() => handleComponentClick('LeaveBalance')}>
            <span className="menu-icon">💰</span>
            Leave Balance
          </div>
          <div className="component" onClick={() => handleComponentClick('LeaveHistory')}>
            <span className="menu-icon">📜</span>
            Leave History
          </div>
          <div className="component" onClick={() => handleComponentClick('LeaveRequestForm')}>
            <span className="menu-icon">📝</span>
            Leave Request Form
          </div>
          <div className="component" onClick={() => handleComponentClick('LeaveTestList')}>
            <span className="menu-icon">📝</span>
            Test Leaves
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="scrollbar">
          {activeComponent === 'Calendar' && (
            <div className="calendar-container">
              <h2>Calendar</h2>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          )}
          {activeComponent === 'Notifications' && <Notifications />}
          {activeComponent === 'DepartmentList' && <DepartmentList />}
          {activeComponent === 'EmployeeList' && <EmployeeList />}
          {activeComponent === 'LeaveBalance' && <LeaveBalance />}
          {activeComponent === 'LeaveHistory' && <LeaveHistory />}
          {activeComponent === 'LeaveRequestForm' && <LeaveRequestForm />}
          {activeComponent === 'LeaveTestList' && <LeaveTestList />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
