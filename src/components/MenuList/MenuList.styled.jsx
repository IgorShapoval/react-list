import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const ListLink = styled.a`
  display: flex;
  font-size: 20px;
  gap: 15px;
  color: black;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
