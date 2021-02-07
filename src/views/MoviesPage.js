import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import movieAPI from '../services/searchMovieApi';
import paths from '../services/paths';
import routes from '../routes';
import Container from '../components/Container/Container';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieCardList from '../components/MovieCard/MovieCardList';

export default class MoviesPage extends Component {
  state = {
    searchMovies: [],
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const currentQuery = this.state.searchQuery;

    if (prevQuery !== currentQuery) {
      movieAPI
        .getMovies(paths.searchMovie, { query: currentQuery })
        .then(({ results }) => {
          if (results.length === 0) {
            return toast.error('Bad search query :( We have no movies for you');
          }

          this.setState({ searchMovies: results });
          this.props.location.search = `?query=${currentQuery}`;
        });
    }
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
    this.props.location.search = '';
  };

  render() {
    const { searchMovies, searchQuery } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <MovieCardList movieList={searchMovies} query={searchQuery} />
      </Container>
    );
  }
}
