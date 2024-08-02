import React, { useState } from 'react';
import './App.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      formErrors['email'] = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      formErrors['email'] = 'Email is not valid.';
    }

    if (!password) {
      formIsValid = false;
      formErrors['password'] = 'Please enter your password.';
    } else if (password.length < 6) {
      formIsValid = false;
      formErrors['password'] = 'Password must be at least 6 characters long.';
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className='main'>
         <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="error">{errors.password}</div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      )}
    </div>
    </div>
   
  );
}

export default LoginForm;
