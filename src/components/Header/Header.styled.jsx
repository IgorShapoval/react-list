import styled from '@emotion/styled';

export const Hamburger = styled.a`
  display: inline-block;
  padding: 10px;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Logo = styled.a`
  display: inline-block;
  color: white;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-family: 'Dancing Script', cursive;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 30px;

  li:last-child {
    border-radius: 50%;
    background-color: white;
  }
`;

export const InfoLink = styled.a`
  display: inline-block;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
  }
`;
