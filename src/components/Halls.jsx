import React from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';

const halls = [
  { id: 1, name: 'Кінозал 1', layout: 'Класична архітектура з 10 рядами по 12 місць' },
  { id: 2, name: 'Кінозал 2', layout: 'VIP зал з м’якими кріслами, 6 рядів по 8 місць' },
  { id: 3, name: 'Кінозал 3', layout: 'ІМАКС-зал з великим екраном, 12 рядів по 15 місць' },
  { id: 4, name: 'Кінозал 4', layout: 'Міні-зал для артхаусних фільмів, 5 рядів по 6 місць' }
];

const Halls = () => {
  const navigate = useNavigate();

  const handleBooking = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Кінозали</h1>
      {halls.map(hall => (
        <div key={hall.id} className="mb-10 p-4 border rounded-xl shadow">
          <h2 className="text-2xl font-semibold">{hall.name}</h2>
          <p className="italic text-gray-600 mb-4">{hall.layout}</p>
          <h3 className="text-xl font-semibold mb-2">Фільми в цьому залі:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movies.filter(movie => movie.hall === hall.id).map(movie => (
              <div key={movie.id} className="border p-3 rounded-md shadow hover:shadow-lg transition flex flex-col">
                <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded" />
                <h4 className="mt-2 font-bold">{movie.title}</h4>
                <p className="text-sm">{movie.date} о {movie.time}</p>
                <p className="text-sm italic mb-2">{movie.genre}</p>
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleBooking(movie.id)}
                    className="home-button"
                  >
                    Обрати місця
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Halls;
