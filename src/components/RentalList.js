import React from 'react';
import RentalItem from './RentalItem';
import '../styles/RentalList.css';

function RentalList({ books }) {
  return (
    <div className="rental-list">
      {books.length > 0 ? (
        books.map(book => (
          <RentalItem key={book.id} book={book} />
        ))
      ) : (
        <p>No tienes libros alquilados actualmente.</p>
      )}
    </div>
  );
}

export default RentalList;
