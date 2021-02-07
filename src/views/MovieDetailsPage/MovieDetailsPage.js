import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import movieAPI from '../../services/searchMovieApi';
import MovieOverview from '../../components/MovieOverview/MovieOverview';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieAPI
      .getMovies(`/movie/${movieId}`)
      .then(data => this.setState({ movieDetails: data }));

    movieAPI
      .getMovies(`/movie/${movieId}/credits`)
      .then(data => this.setState({ cast: data.cast }));

    movieAPI
      .getMovies(`/movie/${movieId}/reviews`)
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    const { movieDetails, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        {movieDetails && (
          <MovieOverview
            movie={movieDetails}
            castLink={`${match.path}/credits`}
            reviewLink={`${match.path}/reviews`}
          >
            <Route
              path={`${match.path}/credits`}
              render={props => <Cast {...props} cast={cast} />}
            />
            <Route
              path={`${match.path}/reviews`}
              render={props => <Reviews {...props} reviews={reviews} />}
            />
          </MovieOverview>
        )}
      </>
    );
  }
}
