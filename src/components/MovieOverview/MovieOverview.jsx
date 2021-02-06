import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieOverview.module.css';

const MovieOverview = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    genres,
    release_date,
    runtime,
    vote_average,
  } = movie;

  const URL = size => {
    return `https://image.tmdb.org/t/p/w${size}`;
  };

  const SRC = poster_path
    ? URL(300) + `${poster_path}`
    : 'https://sezonshin78.ru/design/default_2/images/no_image.png';

  const popularity = Math.round((vote_average * 100) / 10);

  return (
    <section className={s.section}>
      <div className={s.mainInfo}>
        <div className={s.imgWrapper}>
          <img className={s.poster} src={SRC} alt="Film poster" />
        </div>
        <div className={s.descr}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.filmData}>
            <b>Release Date:</b> {release_date}
          </p>
          <p className={s.filmData}>
            <b>User Score:</b> {popularity}%
          </p>
          <p className={s.filmData}>
            <b>Genres:</b> {genres.map(({ name }) => name)}
          </p>
          <p className={s.filmData}>
            <b>Runtime:</b> {runtime} min
          </p>
          <p className={s.filmOverview}>
            <b>Overview:</b>
          </p>
          <p>{overview}</p>
        </div>
      </div>
      <div className={s.addInfo}>
        <p className={s.filmInfo}>Addition Information</p>
        <ul className={s.listInfo}>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </section>
  );
};

MovieOverview.propTypes = {};

export default MovieOverview;
