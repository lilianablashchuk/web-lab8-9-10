import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import { movies } from '../data/movies';

const BOOKED_SEATS_KEY = 'bookedSeats';

const getAllBookings = () => {
  const saved = localStorage.getItem(BOOKED_SEATS_KEY);
  return saved ? JSON.parse(saved) : {};
};

const saveBooking = (movieId, booking) => {
  const bookings = getAllBookings();

  if (!bookings[movieId]) {
    bookings[movieId] = [];
  }

  bookings[movieId].push(booking);
  localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(bookings));
};

const BookingService = {
  getBookedSeats: (movieId) => {
    const bookings = getAllBookings();
    const movieBookings = bookings[movieId] || [];
    return movieBookings.flatMap((booking) => booking.selectedSeats);
  },

  generateTicket: async (movieId, userData, selectedSeats) => {
    const movie = movies.find((m) => m.id.toString() === movieId.toString());

    if (!movie) {
      console.error("Movie not found");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Movie Ticket', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Cinema Hall: ${movie.hall}`, 10, 40);
    doc.text(`Showtime: ${movie.date} ${movie.time}`, 10, 50);
    doc.text(`Name: ${userData.name}`, 10, 60);
    doc.text(`Phone: ${userData.phone}`, 10, 70);
    doc.text(`Email: ${userData.email}`, 10, 80);
    doc.text(`Selected Seats: ${selectedSeats.join(', ')}`, 10, 90);

    const qrUrl = `https://www6.f2movies.to/home`;
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(qrUrl, { width: 100 });
      doc.addImage(qrCodeDataUrl, 'PNG', 150, 30, 50, 50);
    } catch (err) {
      console.error("Error generating QR code", err);
    }

    doc.text('Thank you for booking!', 105, 120, { align: 'center' });
    doc.setLineWidth(0.5);
    doc.line(10, 125, 200, 125);

    doc.save(`ticket_${movieId}_${userData.name}.pdf`);

    saveBooking(movieId, {
      userData,
      selectedSeats,
      timestamp: new Date().toISOString(),
    });
  },
};

export default BookingService;
