import { Route, Switch, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviePage/MoviesPage';
// import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} component={MoviesPage} />
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      <ToastContainer autoClose={3000} />
    </>
  );
}
