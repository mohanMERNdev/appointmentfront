import React from 'react';
import './SignIn.css';

const SignIn = () => (
  <div className="main-content">
    <div className="form-container">
      <h2>Sign In</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    </div>
  </div>
);

export default SignIn;
