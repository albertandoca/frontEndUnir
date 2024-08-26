import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/BookDetailPage.css';
import { featuredBooks } from '../data';  // Importamos featuredBooks

function BookDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, imgSrc, title, author, description, isRented: initialIsRented } = state || {};

  const [isRented, setIsRented] = useState(initialIsRented);

  if (!state) {
    return <p>No hay detalles disponibles para este libro.</p>;
  }

  const handleRental = () => {
    // Actualizamos el estado de alquiler en la lista de libros
    const updatedBooks = featuredBooks.map(book => {
      if (book.id === id) {
        book.isRented = !isRented; // Actualizamos el campo isRented
        return { ...book, isRented: !isRented };
      }
      return book;
    });

    setIsRented(!isRented);
  };

  // Filtrar los libros alquilados para la barra lateral
  const rentedBooks = featuredBooks.filter(book => book.isRented);

  const handleClickRentedBook = (book) => {
    navigate(`/book/${book.id}`, { state: { ...book, books: featuredBooks } });
  };

  return (
    <div className="book-detail-page">
      <div className="book-detail-main">
        <div className="book-detail">
          <img src={imgSrc} alt={title} />
          <div className="book-detail__info">
            <h2>{title}</h2>
            <p><strong>Autor:</strong> {author}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="rental-button">
          <button onClick={handleRental} className={isRented ? 'cancel-button' : 'rent-button'}>
            {isRented ? 'Cancelar Alquiler' : 'Alquilar este libro'}
          </button>
        </div>
        <div className="review-section">
          <h3>Críticas y Reseñas</h3>
          <div className="review">
            <p><strong>Usuario1:</strong> ¡Gran libro!</p>
            <p>Calificación: 5/5</p>
          </div>
          <div className="review">
            <p><strong>Usuario2:</strong> Interesante lectura</p>
            <p>Calificación: 4/5</p>
          </div>
        </div>
      </div>
      <div className="book-detail-sidebar">
        <h3>Libros Alquilados</h3>
        {rentedBooks.map(book => (
          <div key={book.id} className="rented-book" onClick={() => handleClickRentedBook(book)}>
            <img src={book.imgSrc} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetailPage;
