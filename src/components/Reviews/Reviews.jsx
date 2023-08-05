import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'components/App';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [fetchStatus, setFetchStatus] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}&page=1`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);
        setFetchStatus(true);
        return setReviews(res.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    //  fetchStatus && reviews.length === 0 &&
    // <p>We dont have any reviews for this movie</p>

    fetchStatus &&
    reviews.length !== 0 && (
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h5>Author:{review.author}</h5>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};
