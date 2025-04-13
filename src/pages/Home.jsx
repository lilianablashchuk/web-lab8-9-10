import React from "react";
import movies from "../data/movies";  

const Home = () => {
  return (
    <div>
      <h1>Список фільмів</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.genre}</p>
            <p>{movie.showtime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
