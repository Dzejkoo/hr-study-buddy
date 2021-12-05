import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const handleColorType = (average) => {
  if (average.children < 2) {
    return theme.colors.error;
  } else if (average.children < 3) {
    return theme.colors.warning;
  } else if (average.children > 4) {
    return theme.colors.success;
  }
  return theme.colors.grey;
};

export const StyledAvarge = styled.div`
  border-radius: 50%;
  background-color: ${(average) => handleColorType(average)};
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.m};
  font-weight: 700;
`;
