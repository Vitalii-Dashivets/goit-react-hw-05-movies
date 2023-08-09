import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetch-api';
import { API_KEY } from 'components/App';
import { BASE_URL } from 'components/App';
import { Loader } from 'components/Loader/Loader';
import { List, Item, Title, Content } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      `https://${BASE_URL}/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}&page=1`
    )
      .then(res => {
        return setReviews(res.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 700);
  }, [reviews]);

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length !== 0 && (
        <List>
          {reviews.map(review => {
            return (
              <Item key={review.id}>
                <Title>Author : {review.author}</Title>
                <Content>{review.content}</Content>
              </Item>
            );
          })}
        </List>
      )}
      {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>}
    </div>
  );
};
export default Reviews;
