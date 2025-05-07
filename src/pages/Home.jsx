import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [movies.length]);

  return (
    <div className="home two-columns">
      <div className="home-left">
        <h1>Ласкаво просимо до кінопорталу!</h1>
  
        <div className="home-buttons">
          <Link to="/schedule" className="home-button">🗓️ Переглянути розклад</Link>
          <Link to="/halls" className="home-button">🎫 Забронювати квитки</Link>
        </div>
      </div>
  
      <div className="home-right">
        <h2 className="now-showing-title">У прокаті зараз</h2>
        {movies.length > 0 && (
          <div className="slider">
            <h3 className="slider-title">{movies[currentIndex].title}</h3>
            <img
              key={movies[currentIndex].id}
              src={movies[currentIndex].poster}
              alt={movies[currentIndex].title}
              className="slider-poster"
            />
          </div>
        )}
      </div>
    </div>
  );
};  
export default Home;
