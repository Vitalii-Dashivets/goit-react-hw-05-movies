import { Header, Link } from 'components/App.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};
