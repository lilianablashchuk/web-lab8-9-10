import React from 'react';
import '../pages/booking.css';

const CinemaHall = ({ selectedSeats, handleSeatClick, bookedSeats }) => {
  const rows = 5;
  const cols = 8;

  const validSelectedSeats = Array.isArray(selectedSeats) ? selectedSeats : [];
  const validBookedSeats = Array.isArray(bookedSeats) ? bookedSeats : [];

  return (
    <div className="seats-grid">
      {[...Array(rows)].map((_, row) => (
        [...Array(cols)].map((_, col) => {
          const seat = `${row + 1}-${col + 1}`;
          const isSelected = validSelectedSeats.includes(seat);
          const isBooked = validBookedSeats.includes(seat);
          return (
            <div
              key={seat}
              className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
              onClick={() => !isBooked && handleSeatClick(row, col)} 
            >
              {seat}
            </div>
          );
        })
      ))}
    </div>
  );
};

export default CinemaHall;
