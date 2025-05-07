import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies'; 

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find(m => m.id.toString() === movieId);
    if (foundMovie) {
      setMovie(foundMovie);
    }
  }, [movieId]);

  if (!movie) {
    return <div>Movie not found</div>; 
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Cinema Hall:</strong> {movie.hall}</p>
      <p><strong>Showtime:</strong> {movie.date} {movie.time}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default MovieDetails;
