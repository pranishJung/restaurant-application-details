import React, { useState } from 'react';
import axios from 'axios';

interface Reservation {
  name: string;
  time: string;
  partySize: number;
}

const Reservation: React.FC = () => {
  const [reservation, setReservation] = useState<Reservation>({ name: '', time: '', partySize: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('/api/reservations', reservation)
      .then(() => alert('Reservation made successfully'))
      .catch(error => console.error('Error making reservation:', error));
  };

  return (
    <div>
      <h1>Make a Reservation</h1>
      <input type="text" name="name" value={reservation.name} onChange={handleChange} placeholder="Your Name" />
      <input type="text" name="time" value={reservation.time} onChange={handleChange} placeholder="Reservation Time" />
      <input type="number" name="partySize" value={reservation.partySize} onChange={handleChange} placeholder="Party Size" />
      <button onClick={handleSubmit}>Submit Reservation</button>
    </div>
  );
};

export default Reservation;