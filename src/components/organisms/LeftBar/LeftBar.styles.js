import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100vh;
  border-right: 1px solid #dfe2e8;
`;

export const Navigation = styled.div`
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 0;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
