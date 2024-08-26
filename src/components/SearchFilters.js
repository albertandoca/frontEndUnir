import React from 'react';
import '../styles/SearchFilters.css';

function SearchFilters({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="search-filters">
      <h3>Filtros de búsqueda</h3>
      <div className="filter-group">
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={filters.author || ''}
          onChange={handleFilterChange}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={filters.title || ''}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default SearchFilters;

