import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  width: 230px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px 20px 10px;
  position: relative;
`;

export const ItemSvg = styled.div`
  width: 60px;
  height: 80px;
  background-color: ${p => p.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  left: 10px;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`;

export const ItemWrap = styled.div`
  text-align: end;
`;

export const ItemName = styled.div`
  font-weight: 300;
`;

export const ItemAmount = styled.div`
  font-size: 30px;
`;
