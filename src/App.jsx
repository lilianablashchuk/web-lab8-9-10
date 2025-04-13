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
        {}
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

        {}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Пошук за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList movies={filteredMovies} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="home">
      <h1>Ласкаво просимо до нашого кінопорталу!</h1>
      <p>Знайдіть найкращі фільми та забронюйте квитки!</p>
      <img
        src="https://example.com/welcome-image.jpg"
        alt="Welcome"
        className="home-image"
      />
    </div>
  );
};

export default App;
