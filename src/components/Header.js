import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/home">Biblioteca Online</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/rental">Mis Alquileres</Link></li>
          <li><Link to="/search">Buscar Libros</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

