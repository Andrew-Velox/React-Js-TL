import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const userData = await getAllUsers();
      setUsers(userData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list">
      <h2>All Users</h2>
      <button onClick={fetchUsers} className="refresh-btn">
        Refresh Users
      </button>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name.firstname} {user.name.lastname}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <div className="address">
              <strong>Address:</strong>
              <p>{user.address.street}, {user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
