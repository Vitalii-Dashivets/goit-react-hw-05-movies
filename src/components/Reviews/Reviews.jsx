import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'components/App';
import { BASE_URL } from 'components/App';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://${BASE_URL}/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}&page=1`
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        return setReviews(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length !== 0 && (
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
      )}
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};
