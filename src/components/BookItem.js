import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookItem.css';

function BookItem({ id, imgSrc, title, author, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`, { state: { id, imgSrc, title, author, description } });
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <img src={imgSrc} alt={title} className="book-item__image" />
      <h3 className="book-item__title">{title}</h3>
      <p className="book-item__author">{author}</p>
    </div>
  );
}

export default BookItem;
