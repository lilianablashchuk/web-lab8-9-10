import React, { useState, useEffect } from 'react';
import { movies } from '../data/movies'; 
import './MoviesSchedule.css'; 

const MoviesSchedule = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [activePoster, setActivePoster] = useState(null); 

  useEffect(() => {
    setMoviesList(movies); 
  }, []);

  const sortedMovies = [...moviesList].sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.time}:00`).getTime();
    const timeB = new Date(`1970-01-01T${b.time}:00`).getTime();
    return timeA - timeB;
  });

  const groupByTime = sortedMovies.reduce((groups, movie) => {
    const time = movie.time.split(':')[0]; 
    if (!groups[time]) {
      groups[time] = [];
    }
    groups[time].push(movie);
    return groups;
  }, {});

  const handlePosterClick = (movieId) => {
    if (activePoster === movieId) {
      setActivePoster(null); 
    } else {
      setActivePoster(movieId); 
    }
  };

  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Розклад показів фільмів</h1>
      <div className="time-schedule">
        {Object.keys(groupByTime).map((time) => (
          <div className="time-slot" key={time}>
            <h2 className="time-slot-title">{time}:00</h2>
            <div className="movies-list">
              {groupByTime[time].map((movie) => (
                <div className="movie-item" key={movie.id}>
                  <div className="movie-info">
                    <div className="movie-details">
                    </div>
                    <div 
                      className={`movie-poster-container ${activePoster === movie.id ? 'active' : ''}`} 
                      onClick={() => handlePosterClick(movie.id)}
                    >
                      <img src={movie.poster} alt={`Постер фільму ${movie.title}`} className="movie-poster" />
                      <div className="movie-details-overlay">
                        <h4>{movie.title}</h4>
                        <p>{movie.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSchedule;
