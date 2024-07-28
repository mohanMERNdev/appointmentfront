import React from 'react';
import './SignUp.css';

const SignUp = () => (
  <div className="main-content">
    <div className="form-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  </div>
);

export default SignUp;
