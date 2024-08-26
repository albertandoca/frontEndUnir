import React from 'react';
import RentalList from './RentalList';
import '../styles/RentalPage.css';
import { featuredBooks } from '../data';  // Importamos los libros desde data.js

function RentalPage() {
  // Filtrar los libros alquilados (isRented: true)
  const rentedBooks = featuredBooks.filter(book => book.isRented);

  return (
    <div className="rental-page">
      <h1>Mis Alquileres</h1>
      <RentalList books={rentedBooks} />
    </div>
  );
}

export default RentalPage;
