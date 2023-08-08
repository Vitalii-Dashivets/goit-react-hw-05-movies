import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { BASE_URL } from 'components/App';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;

  return (
    movie.id && (
      <div>
        <Link to={backLinkHref.current}>Go back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          width="130"
          height="200"
        />
        <h2>
          {title}( {release_date.substr(0, 4)} )
        </h2>
        <p>User score: {Math.floor(vote_average)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres.map(genre => {
            return genre.name;
          })}
        </p>
        <div>
          <h5>Additional information</h5>
          <ul>
            <li key={'cast'}>
              {' '}
              <Link to={'cast'}>Cast</Link>
            </li>
            <li key={'reviews'}>
              {' '}
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
          {isLoading && <Loader />}
          {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
