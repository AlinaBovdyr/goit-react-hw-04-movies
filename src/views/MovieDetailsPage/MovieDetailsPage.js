import React, { Component } from 'react';
import movieAPI from '../../services/searchMovieApi';
import MovieOverview from '../../components/MovieOverview/MovieOverview';
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

    return movieDetails && <MovieOverview movie={movieDetails} />;
  }
}
