import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'components/App';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);

        return setActors(res.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
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
  );
};