// src/pages/Booking.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the react-calendar library
import 'react-calendar/dist/Calendar.css'; // Import the default styles for react-calendar
import './Booking.css'; // Import custom CSS

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('09:00'); // Default time

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the booking logic here
    alert(`Appointment booked for ${date.toDateString()} at ${time}`);
  };

  return (
    <div className="booking-page">
      <h1>Book an Appointment</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          minDate={new Date()} // Disable past dates
        />
      </div>
      <div className="time-selection">
        <label htmlFor="time">Select a time:</label>
        <select id="time" value={time} onChange={handleTimeChange}>
          {[...Array(10).keys()].map(i => {
            const hour = 9 + i;
            return (
              <option key={i} value={`${hour < 10 ? `0${hour}` : hour}:00`}>
                {hour < 10 ? `0${hour}` : hour}:00
              </option>
            );
          })}
        </select>
      </div>
      <button className="book-button" onClick={handleSubmit}>
        Book Appointment
      </button>
    </div>
  );
};

export default Booking;
