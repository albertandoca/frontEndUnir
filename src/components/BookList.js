import React, { useState } from 'react';
import BookItem from './BookItem';
import '../styles/BookList.css';

function BookList({ books }) {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8; // Mostrar 8 libros por página

  // Determinar los libros a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="book-list-container">
      <div className="book-list">
        {currentBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            imgSrc={book.imgSrc}
            title={book.title}
            author={book.author}
            description={book.description}
            isRented={book.isRented}
          />
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BookList;
