import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [appointment, setAppointment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your booking logic here
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
          placeholder="Appointment Details"
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
