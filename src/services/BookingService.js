import jsPDF from 'jspdf';
import QRCode from 'qrcode'; 
import { movies } from '../data/movies'; 

const BookingService = {
  getBookedSeats: (movieId) => {
    return [];
  },

  generateTicket: async (movieId, userData, selectedSeats) => {
    const movie = movies.find((m) => m.id.toString() === movieId.toString());

    if (!movie) {
      console.error("Фільм не знайдено");
      return;
    }

    const doc = new jsPDF();

    doc.addFileToVFS('DejaVuSans.ttf', 'path_to_DejaVuSans.ttf');
    doc.setFont('DejaVuSans'); 
    doc.setFontSize(12);

    doc.setFontSize(16);
doc.text('Movie Ticket', 105, 20, { align: 'center' });

doc.setFontSize(12);
doc.text(`Movie: ${movie.title}`, 10, 40);
doc.text(`Showtime: ${movie.date} ${movie.time}`, 10, 50);
doc.text(`Name: ${userData.name}`, 10, 60);
doc.text(`Phone: ${userData.phone}`, 10, 70);
doc.text(`Email: ${userData.email}`, 10, 80);
doc.text(`Selected seats: ${selectedSeats.join(', ')}`, 10, 90);

const qrUrl = `https://example.com/movie/${movieId}`;
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
  },
};

export default BookingService;
