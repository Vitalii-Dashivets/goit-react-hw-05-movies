import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  border-top: 2px solid rgba(100, 100, 100, 0.5);
  border-bottom: 2px solid rgba(100, 100, 100, 0.5);
  margin: 20px 0;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: rgba(240, 100, 120, 0.5);
  margin: 10px 0;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 20, 50, 0.5);
  }
`;
