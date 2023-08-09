import styled from '@emotion/styled';

export const Container = styled.div`
  width: 940px;
  margin: :0;
  margin: 0 auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: rgba(100, 10, 10, 0.2);
  width: 200px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(100, 100, 100, 0.3);
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 15px 0;
  text-align: center;
`;
export const RoleText = styled.p`
  text-align: center;
`;
