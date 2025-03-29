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

function SignUpForm({ closeForm }) {
  const [formData, setFormData] = useState({
    username: '',
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

    // Placeholder for sign-up API call
    // You can send formData to your backend here
    setSuccess(true); // Display success message
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success ? (
        <p>Sign Up Successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button className="submit" type="submit">Sign Up</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default SignUpForm;
