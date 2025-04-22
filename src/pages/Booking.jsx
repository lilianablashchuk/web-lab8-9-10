import React, { useState } from 'react';
import CinemaHall from '../components/CinemaHall';
import './booking.css';

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, col) => {
    const seat = `${row + 1}-${col + 1}`;
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  return (
    <div className="booking">
      <h2>Бронювання місць</h2>
      <div className="screen">Екран</div>
      <CinemaHall selectedSeats={selectedSeats} handleSeatClick={handleSeatClick} />
      
      <div className="selected-info">
        <h3>Обрані місця:</h3>
        {selectedSeats.length > 0 ? (
          <p>{selectedSeats.join(', ')}</p>
        ) : (
          <p>Немає обраних місць</p>
        )}
      </div>

      <button className="book-button">Забронювати</button>
    </div>
  );
};

export default Booking;
