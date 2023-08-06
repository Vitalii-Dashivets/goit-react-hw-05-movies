import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Container } from './App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const API_KEY = 'd9e80b20e643122ebd230a9efed67c63';

export const App = () => {
  return (
    <Container>
      {/* <Header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
