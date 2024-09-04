import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleLoginClick = () => {
    if (username && password) {
      onLogin(username);
      setMessage(null); // Clear any previous message
    } else {
      setMessage('Please enter both username and password.');
    }
  };

  return (
    <div className="Login">
      {message && <div className="login-message">{message}</div>}
      <div className="login-form">
        <h1 className="login-title">Login Now to Access the Menu!</h1>
        <div className="form-group">
          <input 
            type="text" 
            name="username" 
            className="form-input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            className="form-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
          />
        </div>
        <button className="submit-button" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
