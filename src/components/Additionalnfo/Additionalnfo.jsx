import { Title, Container, List, Link } from './Additionalnfo.styled';
export const AdditionalInfo = () => {
  return (
    <Container>
      <Title>Additional information</Title>
      <List>
        <li key={'cast'}>
          {' '}
          <Link to={'cast'}>Cast</Link>
        </li>
        <li key={'reviews'}>
          {' '}
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </List>
    </Container>
  );
};
