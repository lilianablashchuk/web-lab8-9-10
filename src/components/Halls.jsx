import React from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import './Halls.css';

const halls = [
  { id: 1, name: 'Кінозал 1', layout: 'Класична архітектура з 10 рядами по 12 місць' },
  { id: 2, name: 'Кінозал 2', layout: 'VIP зал з м’якими кріслами, 6 рядів по 8 місць' },
  { id: 3, name: 'Кінозал 3', layout: 'ІМАКС-зал з великим екраном, 12 рядів по 15 місць' },
  { id: 4, name: 'Кінозал 4', layout: 'Міні-зал для артхаусних фільмів, 5 рядів по 6 місць' }
];

const Halls = () => {
  const navigate = useNavigate();

  const handleBooking = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <div className="halls-container">
      <h1 className="halls-title">Кінозали</h1>
      {halls.map(hall => (
        <div key={hall.id} className="hall-card">
          <h2 className="hall-name">{hall.name}</h2>
          <p className="hall-layout">{hall.layout}</p>
          <h3 className="hall-movie-header">Фільми в цьому залі:</h3>
          <div className="hall-movie-row">
            {movies.filter(movie => movie.hall === hall.id).map(movie => (
              <div key={movie.id} className="movie-card1">
                <img src={movie.poster} alt={movie.title} className="movie-poster1" />
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie-datetime">{movie.date} о {movie.time}</p>
                <p className="movie-genre">{movie.genre}</p>
                <button
                  onClick={() => handleBooking(movie.id)}
                  className="booking-button"
                >
                  Обрати місця
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Halls;
