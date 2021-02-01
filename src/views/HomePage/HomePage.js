import React, { Component } from 'react';
import movieAPI from '../../services/searchMovieApi';

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
      <>
        <h1>Trending today</h1>
        <ul>
          {popularMovies.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </>
    );
  }
}
