import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieOverview.module.css';

const MovieOverview = ({ movie, castLink, reviewLink, children }) => {
  const {
    title,
    genres,
    overview,
    poster_path,
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
          <h1 className={s.title}>
            {title} ({release_date && release_date.slice(0, 4)})
          </h1>
          <p className={s.filmData}>
            <b className={s.subtitle}>Release Date:</b> {release_date}
          </p>
          <p className={s.filmData}>
            <b className={s.subtitle}>User Score:</b> {popularity}%
          </p>
          <p className={s.filmData}>
            <b className={s.subtitle}>Genres:</b>{' '}
            {genres.map(({ name }) => name)}
          </p>
          <p className={s.filmData}>
            <b className={s.subtitle}>Runtime:</b> {runtime} min
          </p>
          <p className={s.filmOverview}>
            <b className={s.subtitle}>Overview:</b>
          </p>
          <p>{overview}</p>
        </div>
      </div>
      <div className={s.addInfo}>
        <p className={s.filmInfo}>Addition Information:</p>
        <ul className={s.linkList}>
          <li className={s.linkItem}>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={castLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.linkItem}>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={reviewLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      {children}
    </section>
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
  }),
  castLink: PropTypes.string.isRequired,
  reviewLink: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MovieOverview;
