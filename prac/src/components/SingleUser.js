import React, { useState } from 'react';
import { getUserById } from '../services/userService';

const SingleUser = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchUser = async (e) => {
    e.preventDefault();
    if (!userId) {
      setError('Please enter a user ID');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const userData = await getUserById(userId);
      setUser(userData);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="single-user">
      <h2>Get Single User</h2>
      <form onSubmit={handleFetchUser} className="user-form">
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID (1-10)"
            min="1"
            max="10"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get User'}
        </button>
      </form>

      {error && <div className="error">Error: {error}</div>}

      {user && (
        <div className="user-details">
          <h3>User Details</h3>
          <div className="user-info">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <div className="address-section">
              <strong>Address:</strong>
              <p>{user.address.street}, {user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>Geolocation: {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
