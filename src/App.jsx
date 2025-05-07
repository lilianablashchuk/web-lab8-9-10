import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { movies } from './data/movies';
import MovieList from './components/MovieList';
import Home from './pages/Home';
import Halls from './components/Halls';
import Booking from './pages/Booking';
import Schedule from './pages/MovieSchedule';
import './App.css';

const AppContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const showSearch = location.pathname === '/' || location.pathname === '/movies';

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Головна</Link></li>
          <li><Link to="/movies" className="nav-link">Фільми</Link></li>
          <li><Link to="/schedule" className="nav-link">Розклад</Link></li>
          <li><Link to="/halls" className="nav-link">Квитки</Link></li>
        </ul>
      </nav>

      {showSearch && (
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Пошук за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home movies={filteredMovies} />} />
        <Route path="/movies" element={<MovieList movies={filteredMovies} />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/halls" element={<Halls />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
