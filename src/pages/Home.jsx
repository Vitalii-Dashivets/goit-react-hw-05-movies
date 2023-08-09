import { useEffect } from 'react';

import { useState } from 'react';
import { fetchData } from 'services/fetch-api';
import { API_KEY } from 'components/App';
import { Loader } from 'components/Loader/Loader';
import { BASE_URL } from 'components/App';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/MoviesList/MoviesList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      `https://${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
    )
      .then(res => {
        return setMovies(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};

export default Home;
