import React from 'react';
import Slider from 'react-slick';
import BookList from './BookList';
import { carouselImages, featuredBooks, teamMembers } from '../data';
import '../styles/HomePage.css';

function HomePage() {
  // Configuración del carrusel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="homepage">
      {/* Carrusel de imágenes */}
      <section className="homepage__carousel">
        <Slider {...carouselSettings}>
          {carouselImages.map((imgSrc, index) => (
            <div key={index}>
              <img src={imgSrc} alt={`Carousel ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Sección de bienvenida */}
      <section className="homepage__welcome">
        <h1>Bienvenido a la Biblioteca Online</h1>
        <p>Explora nuestra colección de libros y encuentra tus próximos favoritos.</p>
      </section>

      {/* Sección de libros destacados */}
      <section className="homepage__featured">
        <h2>Libros Destacados</h2>
        <BookList books={featuredBooks} />
      </section>

      {/* Sección de presentación del equipo */}
      <section className="homepage__team">
        <h2>Nuestro Equipo</h2>
        <div className="homepage__team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enlaces */}
      <section className="homepage__links">
        <h2>Explora</h2>
        <div className="homepage__nav-links">
          <a href="/search">Buscar Libros</a>
          <a href="/rental">Mis Alquileres</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
