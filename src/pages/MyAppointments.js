import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      // Fetch appointments logic here
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
