import React from 'react';

const BookingForm = ({ userData, setUserData, handleBooking, formError }) => {
  return (
    <div className="booking-form">
      <h3>Форма бронювання</h3>
      <div className="form-group">
        <label>Ім'я:</label>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Телефон:</label>
        <input
          type="text"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>

      {formError && <p className="error">{formError}</p>}

      <button onClick={handleBooking} className="submit-btn">Забронювати</button>
    </div>
  );
};

export default BookingForm;
