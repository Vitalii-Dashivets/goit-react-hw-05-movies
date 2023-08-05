import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from 'components/App';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);

  const onChange = evt => {
    setSearchValue(evt.target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (searchValue === '') {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
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
      });
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="search"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
        />
      </form>
      <div>
        {fetchStatus && (
          <ul>
            {moviesList.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`}>{movie.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movies;
