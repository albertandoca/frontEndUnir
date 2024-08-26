import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import { featuredBooks } from '../data';
import '../styles/SearchResultsPage.css';

function SearchResultsPage() {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [filteredBooks, setFilteredBooks] = useState(featuredBooks);  // Iniciar con todos los libros

  useEffect(() => {
    if (location.state && location.state.query) {
      const searchQuery = location.state.query.toLowerCase();
      const filtered = featuredBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
      );
      setFilteredBooks(filtered);
    }
  }, [location.state]);

  useEffect(() => {
    const filtered = featuredBooks.filter(book => {
      return (
        (!filters.author || book.author.toLowerCase().includes(filters.author.toLowerCase())) &&
        (!filters.title || book.title.toLowerCase().includes(filters.title.toLowerCase()))
      );
    });
    setFilteredBooks(filtered);
  }, [filters]);

  return (
    <div className="search-results-page">
      <SearchFilters filters={filters} setFilters={setFilters} />
      <SearchResults books={filteredBooks} />
    </div>
  );
}

export default SearchResultsPage;
