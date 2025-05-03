import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Home = ({ movies }) => {
  return (
    <div className="home">
      <h1>Ласкаво просимо до кінопорталу!</h1>
      <p>Знайдіть найкращі фільми та забронюйте квитки!</p>
      <div className="home-buttons">
        <Link to="/schedule" className="home-button">🗓️ Переглянути розклад</Link>
        <Link to="/booking" className="home-button">🎫 Забронювати квитки</Link>

      </div>

      <h2 className="now-showing-title">У прокаті зараз</h2>
      <div className="horizontal-scroll">
        {movies.map((movie) => (
          <div key={movie.id} className="scroll-card">
            <img src={movie.poster} alt={movie.title} className="scroll-poster" />
            <p className="scroll-title">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
