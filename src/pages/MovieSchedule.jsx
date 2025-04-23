
import React, { useState, useEffect } from 'react';
import { movies } from '../data/movies'; 
import './MoviesSchedule.css'; 

const MoviesSchedule = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setMoviesList(movies); 
  }, []);

  const sortedMovies = [...moviesList].sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.time}:00`).getTime();
    const timeB = new Date(`1970-01-01T${b.time}:00`).getTime();
    return timeA - timeB;
  });

  return (
    <div className="schedule-container">
      <h1>Розклад показів фільмів</h1>
      <div className="movies-list">
        {sortedMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p><strong>Жанр:</strong> {movie.genre}</p>
              <p><strong>Дата:</strong> {movie.date}</p>
              <p><strong>Час:</strong> {movie.time}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSchedule;
