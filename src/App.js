import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import AppointmentHistory from './pages/MyAppointments';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-appointments" element={<AppointmentHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
