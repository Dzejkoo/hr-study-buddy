import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
