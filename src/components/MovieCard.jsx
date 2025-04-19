import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const { poster, title, description, genre, date, time } = movie;

  return (
    <div className="movie-card">
      <img src={poster} alt={`Постер фільму ${title}`} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        <p className="movie-genre"><strong>Жанр:</strong> {genre}</p>
        <p className="movie-session"><strong>Дата та час сеансу:</strong> {date} {time}</p>
      </div>
    </div>
  );
};

export default MovieCard;
