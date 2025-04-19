import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { movies } from './data/movies';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Головна</Link>
            </li>
            <li>
              <Link to="/movies" className="nav-link">Фільми</Link>
            </li>
          </ul>
        </nav>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Пошук за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movies" element={<MovieList movies={filteredMovies} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ movies }) => {
  return (
    <div className="home">
      <h1>Ласкаво просимо до нашого кінопорталу!</h1>
      <p>Знайдіть найкращі фільми та забронюйте квитки!</p>
      <img
        src="https://images.unsplash.com/photo-1607082352257-0c40f01b1810"
        alt="Welcome"
        className="home-image"
      />
      <div className="home-buttons">
        <Link to="/movies" className="home-button">🎟️ Забронювати квитки</Link>
        <Link to="/movies" className="home-button">🗓️ Переглянути розклад</Link>
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

export default App;
