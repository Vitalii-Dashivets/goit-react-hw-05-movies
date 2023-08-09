import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { BASE_URL } from 'components/App';
import { Suspense } from 'react';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { AdditionalInfo } from 'components/Additionalnfo/Additionalnfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        return setMovie(res);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  function onGoBack() {
    navigate(backLinkHref.current);
  }

  return (
    movie.id && (
      <div>
        <CardMovie movie={movie} onGoBack={onGoBack} />
        <AdditionalInfo />

        {isLoading && <Loader />}
        {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
