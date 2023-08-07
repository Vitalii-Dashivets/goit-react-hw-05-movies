import { Header, Link } from 'components/App.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
