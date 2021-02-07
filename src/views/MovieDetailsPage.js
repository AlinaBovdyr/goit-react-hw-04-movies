import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import movieAPI from '../services/searchMovieApi';
import paths from '../services/paths';
import routes from '../routes';
import MovieOverview from '../components/MovieOverview/MovieOverview';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import BackButton from '../components/Button/BackButton';

export default class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);

    movieAPI
      .getMovies(paths.getDetails(movieId))
      .then(data => this.setState({ movieDetails: data }));

    movieAPI
      .getMovies(paths.getCredits(movieId))
      .then(data => this.setState({ cast: data.cast }));

    movieAPI
      .getMovies(paths.getReviews(movieId))
      .then(data => this.setState({ reviews: data.results }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetails, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        <BackButton onClick={this.handleGoBack} />
        {movieDetails && (
          <MovieOverview
            movie={movieDetails}
            castLink={`${match.url}/credits`}
            reviewLink={`${match.url}/reviews`}
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
