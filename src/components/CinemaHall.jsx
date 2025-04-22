import React from 'react';
import '../pages/booking.css'; 

const ROWS = 8;
const COLS = 10;

const CinemaHall = ({ selectedSeats, handleSeatClick }) => {
  return (
    <div className="seats-grid">
      {Array.from({ length: ROWS }).map((_, row) => (
        <div key={row} className="row">
          {Array.from({ length: COLS }).map((_, col) => {
            const seat = `${row + 1}-${col + 1}`;
            const isSelected = selectedSeats.includes(seat);
            return (
              <div
                key={col}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSeatClick(row, col)}
              >
                {col + 1}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CinemaHall;
