import React, { useState } from 'react';
import { loginUser } from '../services/userService';

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginResult, setLoginResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setLoginResult(null);

    try {
      const result = await loginUser(credentials);
      setLoginResult(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLoginResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = () => {
    setCredentials({
      username: 'mor_2314',
      password: '83r5^_'
    });
  };

  return (
    <div className="user-login">
      <h2>User Login</h2>
      <div className="test-credentials">
        <p><strong>Test Credentials:</strong></p>
        <p>Username: mor_2314 | Password: 83r5^_</p>
        <button onClick={handleTestLogin} className="test-btn">
          Use Test Credentials
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
            placeholder="Enter username"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
            placeholder="Enter password"
          />
        </div>
        
        <button type="submit" disabled={loading} className="login-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {error && <div className="error">Error: {error}</div>}
      
      {loginResult && (
        <div className="login-success">
          <h3>Login Successful!</h3>
          <p><strong>Token:</strong> {loginResult.token}</p>
          <div className="token-info">
            <small>This token can be used for authenticated API requests</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
