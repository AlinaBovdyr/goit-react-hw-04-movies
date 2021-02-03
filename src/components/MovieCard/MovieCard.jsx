import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <section>
      <div>
        <h1>{movie.title}</h1>
        <img src={movie.backdrop_path} alt="Постер фильма" />
      </div>
    </section>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
