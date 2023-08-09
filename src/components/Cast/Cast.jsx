import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetch-api';
import { API_KEY } from 'components/App';
import { BASE_URL } from 'components/App';
import { Loader } from 'components/Loader/Loader';
import { Item, List, Name, RoleText, Container } from './Cast.styled';
const DEFAULT_IMG =
  'https://st.depositphotos.com/17828278/57681/v/1600/depositphotos_576814612-stock-illustration-image-vector-symbol-shadow-missing.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      `https://${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    )
      .then(res => {
        return setActors(res.cast);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 700);
  }, [actors]);

  return (
    <Container>
      {actors.length !== 0 && (
        <List>
          {actors.map(actor => {
            return (
              <Item key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : DEFAULT_IMG
                  }
                  alt=""
                  width="100"
                  height="140"
                />
                <Name>{actor.name}</Name>
                <RoleText>Character:{actor.character}</RoleText>
              </Item>
            );
          })}
        </List>
      )}
      {actors.length === 0 && <p>Sorry, no information...</p>}

      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </Container>
  );
};
export default Cast;
