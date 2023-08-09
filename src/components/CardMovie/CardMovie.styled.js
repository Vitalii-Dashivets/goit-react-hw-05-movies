import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  margin: 15px 0;
  border-radius: 10px;
  background-color: rgba(240, 100, 120, 0.5);
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  /* text-align: center; */

  &:hover {
    background-color: rgba(255, 20, 50, 0.5);
  }
`;
