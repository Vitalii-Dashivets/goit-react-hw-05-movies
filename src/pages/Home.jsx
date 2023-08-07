import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';
import { API_KEY } from 'components/App';
import { Loader } from 'components/Loader/Loader';
// const BASE_URL = '';
// const API_KEY = 'd9e80b20e643122ebd230a9efed67c63';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);
        return setMovies(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <ul>
        <h1>Trending today</h1>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};

export default Home;
