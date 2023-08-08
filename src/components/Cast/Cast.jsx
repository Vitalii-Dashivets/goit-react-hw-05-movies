import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { BASE_URL } from 'components/App';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        return setActors(res.cast);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt=""
                width="70"
                height="100"
              />
              <p>{actor.name}</p>
              <p>Character:{actor.character}</p>
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};
