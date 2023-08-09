import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { BASE_URL } from 'components/App';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form } from 'components/Form/Form';
import { TrendingList } from 'components/TrendingList/TrendingList';

Notify.init({
  width: '300px',
  fontSize: '18px',
  position: 'center-top',
  timeout: '3000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  closeButton: true,
  warning: {
    background: '#c24f98',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
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
    if (searchValue === '') {
      return;
    }
    return setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetch(
      `https://${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
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
        return res.results.length !== 0
          ? setMoviesList(res.results)
          : Notify.warning(
              'Sorry, there are no results for your search criteria'
            );
      })
      .catch(error => {
        Notify.warning(error.message);
        return setIsError(error.message);
      })
      .finally(setIsLoading(false));
  }, [query]);

  return (
    <div>
      <Form
        onChange={onChange}
        onSubmitForm={onSubmitForm}
        searchValue={searchValue}
      />
      <TrendingList movies={moviesList} location={location} />
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};

export default Movies;
