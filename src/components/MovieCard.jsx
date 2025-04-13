import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-genre"><strong>Жанр:</strong> {movie.genre}</p>
        <p className="movie-session"><strong>Дата та час:</strong> {movie.date} - {movie.time}</p>
      </div>
    </div>
  );
};

export default MovieCard;
