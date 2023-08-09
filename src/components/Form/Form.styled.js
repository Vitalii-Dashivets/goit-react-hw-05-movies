import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
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

  &:hover {
    background-color: rgba(255, 20, 50, 0.5);
  }
`;

export const Text = styled.span`
  display: inline-block;
`;

export const Input = styled.input`
  margin-right: 20px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgba(120, 100, 200, 0.8);
  font-size: 20px;
`;
