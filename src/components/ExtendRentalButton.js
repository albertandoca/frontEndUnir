import React from 'react';
import '../styles/ExtendRentalButton.css';
import { featuredBooks } from '../data';  // Para actualizar el tiempo de alquiler

function ExtendRentalButton({ bookId }) {
  const handleExtendRental = () => {
    // Encontrar y actualizar el periodo de alquiler del libro
    const book = featuredBooks.find(b => b.id === bookId);
    if (book) {
      book.rentalPeriod = (book.rentalPeriod || 14) + 7;  // Extender por 7 días, por defecto son 14 días
      alert(`El plazo de alquiler de "${book.title}" se ha extendido a ${book.rentalPeriod} días.`);
    }
  };

  return (
    <button className="extend-rental-button" onClick={handleExtendRental}>
      Extender Plazo de Alquiler
    </button>
  );
}

export default ExtendRentalButton;
