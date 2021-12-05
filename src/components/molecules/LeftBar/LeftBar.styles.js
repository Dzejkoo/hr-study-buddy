import styled from 'styled-components';

export const StyledLeftBar = styled.nav`
  height: 100vh;
  border-right: 1px solid #dfe2e8;
`;

export const Navigation = styled.div`
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    text-decoration: none;
    padding: 10px 0;
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
