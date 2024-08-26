import React from 'react';
import BookItem from './BookItem';
import '../styles/SearchResults.css';

function SearchResults({ books }) {
  return (
    <div className="search-results">
      {books.length > 0 ? (
        <div className="book-list">
          {books.map(book => (
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
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default SearchResults;
