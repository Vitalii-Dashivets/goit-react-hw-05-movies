import { Link } from 'react-router-dom';
import { Item, List } from './TrendingList.styled';
import PropTypes from 'prop-types';

export const TrendingList = ({ movies, location }) => {
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
TrendingList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
