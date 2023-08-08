import { Header, NavLinkStyled } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        {' '}
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
