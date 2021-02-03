import React, { Component } from 'react';
import movieAPI from '../../services/searchMovieApi';
import MovieCard from '../../components/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI
      .getMovies(`/movie/${id}`)
      .then(data => this.setState({ movieDetails: data }));
  }

  render() {
    const { movieDetails } = this.state;

    return movieDetails && <MovieCard movie={movieDetails} />;
  }
}
