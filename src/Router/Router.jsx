import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import HomePage from '../views/HomePage/HomePage';
import MoviesPage from '../views/MoviesPage/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';

const Router = () => {
  return (
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
