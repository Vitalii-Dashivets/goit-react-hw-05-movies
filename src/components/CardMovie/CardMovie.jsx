import { Container, Button } from './CardMovie.styled';
import PropTypes from 'prop-types';

const DEFAULT_IMG =
  'https://st.depositphotos.com/17828278/57681/v/1600/depositphotos_576814612-stock-illustration-image-vector-symbol-shadow-missing.jpg';

export const CardMovie = ({ movie, onGoBack }) => {
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;

  return (
    <Container>
      <Button type="button" onClick={onGoBack}>
        Go back
      </Button>
      <img
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : DEFAULT_IMG
        }
        alt=""
        width="160"
        height="240"
      />
      <h2>
        {title} ( {release_date.substr(0, 4)} )
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
    </Container>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};
