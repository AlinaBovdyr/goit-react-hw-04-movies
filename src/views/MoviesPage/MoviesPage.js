import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import movieAPI from '../../services/searchMovieApi';
import Container from '../../components/Container/Container';
import Searchbar from '../../components/Searchbar/Searchbar';
import MovieCardList from '../../components/MovieCard/MovieCardList';

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
        .getMovies('/search/movie', { query: currentQuery })
        .then(({ results }) => {
          if (results.length === 0) {
            return toast.error('Bad search query :( We have no movies for you');
          }

          this.setState({ searchMovies: results });
        });
    }
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchMovies } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <MovieCardList movieList={searchMovies} />
        {/* <ul>
          {searchMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul> */}
      </Container>
    );
  }
}
