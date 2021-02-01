import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import movieAPI from '../../services/searchMovieApi';
import Searchbar from '../../components/Searchbar/Searchbar';

export default class MoviesPage extends Component {
  state = {
    searchMovies: [],
    searchQuery: '',
  };

  componentDidUpdate() {
    const { searchQuery } = this.state;

    movieAPI
      .getMovies('/search/movie', { query: searchQuery })
      .then(({ results }) => {
        if (results.length === 0) {
          return toast.error('Bad search query :( We have no movies for you');
        }

        this.setState({ searchMovies: results });
      });
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchMovies } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ul>
          {searchMovies.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </>
    );
  }
}
