import React from 'react';
import ExtendRentalButton from './ExtendRentalButton';
import '../styles/RentalItem.css';

function RentalItem({ book }) {
  const { id, imgSrc, title, author, rentalPeriod = 14 } = book;  // Asumimos un plazo de alquiler inicial de 14 días si no está definido

  return (
    <div className="rental-item">
      <img src={imgSrc} alt={title} className="rental-item__image" />
      <div className="rental-item__details">
        <h3>{title}</h3>
        <p><strong>Autor:</strong> {author}</p>
        <p><strong>Plazo de alquiler:</strong> {rentalPeriod} días</p>
        <ExtendRentalButton bookId={id} />
      </div>
    </div>
  );
}

export default RentalItem;
