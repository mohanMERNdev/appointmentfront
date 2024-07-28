// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Ensure this import is included for global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div id="root">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
