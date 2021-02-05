import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './MovieCard.module.css';

const MovieCard = ({
  poster_url,
  filmTitle,
  release_date,
  link,
  popularity,
}) => {
  const URL = size => {
    return `https://image.tmdb.org/t/p/w${size}`;
  };

  const SRC = poster_url
    ? URL(300) + `${poster_url}`
    : 'https://sezonshin78.ru/design/default_2/images/no_image.png';

  return (
    <li className={s.movieCard}>
      <div className={s.imgWrapper}>
        <img className={s.poster} src={SRC} alt="Постер фильма" />
      </div>
      <div className={s.filmData}>
        <h2 className={s.title}>{filmTitle}</h2>
        {release_date && <p className={s.date}>{release_date.slice(0, 4)}</p>}
      </div>
      <NavLink className={s.link} to={link} />
    </li>
  );
};

MovieCard.propTypes = {
  poster_url: PropTypes.string,
  filmTitle: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  link: PropTypes.string.isRequired,
  popularity: PropTypes.number,
};

export default MovieCard;
