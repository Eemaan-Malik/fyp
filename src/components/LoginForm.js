import React, { useState } from 'react';

const validatePassword = (password) => {
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/g;
  const uppercasePattern = /[A-Z]/g;
  return (
    password.length >= 8 &&
    specialCharacterPattern.test(password) &&
    uppercasePattern.test(password)
  );
};

function LoginForm({ closeForm }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear previous error or success when user starts typing
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous messages before processing
    setError('');
    setSuccess(false);

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long, contain at least one uppercase letter and one special character.');
      return;
    }

    // Dummy validation logic, replace with API call
    const validCredentials = formData.email === "emaan@gmail.com" && formData.password === "Password@123";

    if (!validCredentials) {
      setError('Invalid credentials. Please try again.');
      return;
    }

    setSuccess(true); // Display success message
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success ? (
        <p>Login Successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
