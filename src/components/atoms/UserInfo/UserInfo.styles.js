import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const StyledUserInfo = styled.div`
  padding: 0 20px;
  p {
    margin: 0;
    font-size: ${theme.fontSize.m};
    font-weight: 700;
    color: ${theme.colors.grey};
  }
  p:last-of-type {
    font-size: ${theme.fontSize.s};
    font-weight: 400;
  }
`;
