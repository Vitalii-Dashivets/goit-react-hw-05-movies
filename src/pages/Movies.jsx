import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const location = useLocation();
  const query = searchParams.get('query');

  const onChange = evt => {
    return setSearchValue(evt.target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (query === '') {
      return;
    }
    console.log(searchParams);
    return setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
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
        setFetchStatus(true);
        console.log(res.results);
        return setMoviesList(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setTimeout(() => setIsLoading(false), 2000));
  }, [query]);

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="search"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <div>
        {fetchStatus && (
          <ul>
            {moviesList.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};

export default Movies;
