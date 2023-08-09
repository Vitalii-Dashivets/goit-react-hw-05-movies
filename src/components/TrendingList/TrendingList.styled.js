import styled from '@emotion/styled';

export const List = styled.ul`
  & li:nth-of-type(2n) {
    background-color: rgba(200, 250, 200, 0.3);
  }
`;
export const Item = styled.li`
  background-color: rgba(100, 100, 200, 0.3);
  width: 500px;
  padding: 5px 0;
`;
export const Title = styled.h1`
  margin-left: 50px;
`;
