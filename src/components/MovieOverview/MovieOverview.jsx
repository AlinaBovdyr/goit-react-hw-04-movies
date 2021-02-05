import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieOverview.module.css';

const MovieCard = ({ movie }) => {
  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    genres,
    release_date,
    runtime,
  } = movie;

  const URL = size => {
    return `https://image.tmdb.org/t/p/w${size}`;
  };

  return (
    <section className={s.wrapper}>
      <img
        className={s.poster}
        src={URL(300) + `${poster_path}`}
        alt="Постер фильма"
      />
      <div
        className={s.descr}
        style={{ backgroundImage: `url(${URL(500)}${backdrop_path})` }}
      >
        <h1>{title}</h1>
        <p>
          {release_date} / {genres.map(({ name }) => name)} / {runtime}
        </p>
        <p>{overview}</p>
      </div>
    </section>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
