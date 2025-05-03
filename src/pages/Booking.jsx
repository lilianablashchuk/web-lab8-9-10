import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import BookingForm from '../components/BookingForm'; 
import { movies } from '../data/movies'; 
import BookingService from '../services/BookingService'; 
import './booking.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const { id } = useParams(); 
  const movie = movies.find((m) => m.id.toString() === id);
  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });
  const [formError, setFormError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedSeats = BookingService.getBookedSeats(id);
    const allBookedSeats = savedSeats.flatMap((booking) => booking.selectedSeats);
    setBookedSeats(allBookedSeats);
  }, [id]);

  const handleSeatClick = (row, col) => {
    const seat = `${row + 1}-${col + 1}`;
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const validateForm = () => {
    const { name, phone, email } = userData;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!name || !phone || !email) {
      setFormError('Усі поля є обов\'язковими');
      return false;
    }
    if (!emailRegex.test(email)) {
      setFormError('Невірний формат емейлу');
      return false;
    }
    setFormError(null);
    return true;
  };

  const handleBooking = () => {
    if (validateForm()) {
      BookingService.generateTicket(id, userData, selectedSeats);
      toast.success('Бронювання успішно виконано!');
      setBookedSeats([...bookedSeats, ...selectedSeats]);
      setSelectedSeats([]);
      setUserData({ name: '', phone: '', email: '' });
      setShowForm(false); 
    }
  };

  if (!movie) {
    return <p>Фільм не знайдено</p>;
  }

  return (
    <div className="booking">
      <h2>Бронювання місць для фільму:</h2>
      <div className="movie-summary">
        <img src={movie.poster} alt={movie.title} className="booking-movie-poster" />
        <div className="booking-movie-info">
          <h3>{movie.title}</h3>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          <p><strong>Опис:</strong> {movie.description}</p>
          <p><strong>Сеанс:</strong> {movie.date} {movie.time}</p>
        </div>
      </div>

      <div className="screen">Екран</div>
      <CinemaHall
        selectedSeats={selectedSeats}
        handleSeatClick={handleSeatClick}
        bookedSeats={bookedSeats}
      />

      <div className="selected-info">
        <h3>Обрані місця:</h3>
        {selectedSeats.length > 0 ? (
          <p>{selectedSeats.join(', ')}</p>
        ) : (
          <p>Немає обраних місць</p>
        )}
      </div>

      {selectedSeats.length > 0 && !showForm && (
        <button onClick={() => setShowForm(true)} className="show-form-btn">
          Перейти до форми бронювання
        </button>
      )}

      {showForm && (
        <BookingForm
          userData={userData}
          setUserData={setUserData}
          handleBooking={handleBooking}
          formError={formError}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default Booking;
