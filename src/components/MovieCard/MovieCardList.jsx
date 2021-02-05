import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import s from './MovieCard.module.css';

const MovieCardList = ({ movieList }) => {
  return (
    <ul className={s.movieList}>
      {movieList.map(({ id, poster_path, title, release_date, popularity }) => {
        return (
          <MovieCard
            key={id}
            poster_url={poster_path}
            filmTitle={title}
            release_date={release_date}
            popularity={popularity}
            link={`/movies/${id}`}
          />
        );
      })}
    </ul>
  );
};

MovieCardList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

export default MovieCardList;
