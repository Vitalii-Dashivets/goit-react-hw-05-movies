import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';
import { API_KEY } from 'components/App';
import { Loader } from 'components/Loader/Loader';
import { BASE_URL } from 'components/App';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Title } from 'components/TrendingList/TrendingList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: 'd9e80b20e643122ebd230a9efed67c63',
        },
      }
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        return setMovies(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <TrendingList movies={movies} location={location} />
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};

export default Home;
