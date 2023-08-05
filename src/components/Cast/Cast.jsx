import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'components/App';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [fetchStatus, setFetchStatus] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);
        setFetchStatus(true);
        return setActors(res.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    fetchStatus && (
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://api.themoviedb.org/3/movie/${movieId}/images${actor.profile_path}?language=en-US&api_key=${API_KEY}`}
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
    )
  );
};
