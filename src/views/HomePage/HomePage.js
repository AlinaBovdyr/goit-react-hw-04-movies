import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieAPI from '../../services/searchMovieApi';
import Container from '../../components/Container/Container';
import MovieCardList from '../../components/MovieCard/MovieCardList';

export default class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    movieAPI
      .getMovies('/trending/movie/day')
      .then(data => this.setState({ popularMovies: data.results }));
  }

  render() {
    const { popularMovies } = this.state;

    return (
      <Container>
        <h1>Trending today</h1>
        <MovieCardList movieList={popularMovies} />
      </Container>
    );
  }
}
