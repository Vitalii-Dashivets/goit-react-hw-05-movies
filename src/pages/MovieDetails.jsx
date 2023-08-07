import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);
        return setMovie(res);
      });
  }, [movieId]);
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  return (
    movie.id && (
      <div>
        <NavLink to={backLinkHref}>Go back</NavLink>
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
              <NavLink to={'cast'}>Cast</NavLink>
            </li>
            <li key={'reviews'}>
              {' '}
              <NavLink to={'reviews'}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
