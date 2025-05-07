import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  if (!movie) return null;

  const { id, poster, title, description, genre, date, time, trailer } = movie;

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="movie-card">
        <img src={poster} alt={`Постер фільму ${title}`} className="movie-poster" />
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-description">{description}</p>
          <p className="movie-genre"><strong>Жанр:</strong> {genre}</p>
          <p className="movie-session"><strong>Дата та час сеансу:</strong> {date} {time}</p>
          <div className="movie-buttons">
            <Link to={`/booking/${id}`} className="home-button">Забронювати квиток</Link>
            <button onClick={openModal} className="trailer-button">Переглянути трейлер</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <iframe
              width="100%"
              height="400"
              src={trailer}
              title={`Трейлер ${title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button onClick={closeModal} className="close-button">Закрити</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
