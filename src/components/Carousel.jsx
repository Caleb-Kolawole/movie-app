import React, { useContext } from 'react';
import Slider from 'react-slick';
import { AppContext } from '../contexts/AppContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mockMovies = [
  { id: 1, title: 'The Matrix', category: 'Action' },
  { id: 2, title: 'Inception', category: 'Sci-Fi' },
  { id: 3, title: 'Parasite',category: 'Drama' },
  { id: 4, title: 'Interstellar', category: 'Sci-Fi' },
  { id: 5, title: 'Joker',category: 'Drama' },
  { id: 6, title: 'Avengers', category: 'Action' },
];

const Carousel = () => {
  const { searchTerm } = useContext(AppContext); 

  const filteredMovies = mockMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id}>
              {/* <img src={movie.image} alt={movie.title} /> */}
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
