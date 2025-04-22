import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { movies } from './data/movies';
import MovieList from './components/MovieList';
import Home from './pages/Home';
import Booking from './pages/Booking';
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
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
