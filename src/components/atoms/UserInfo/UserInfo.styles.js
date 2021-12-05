import styled from 'styled-components';

export const StyledUserInfo = styled.div`
  padding: 0 20px;
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;

    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:last-of-type {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;
