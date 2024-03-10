// App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import LoginPage from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard 
          user={user} 
          onLogout={handleLogout} 
          departments={['Department 1', 'Department 2', 'Department 3']} 
          leaveRequests={[]} 
          testLeaves={[]} 
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;