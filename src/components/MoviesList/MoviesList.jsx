import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Item, List } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
