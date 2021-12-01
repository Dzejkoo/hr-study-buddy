import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const handleColorType = (avarage) => {
  if (avarage.children < 2) {
    return theme.colors.error;
  } else if (avarage.children < 3) {
    return theme.colors.warning;
  } else if (avarage.children > 4) {
    return theme.colors.success;
  }
  return theme.colors.grey;
};

export const StyledAvarge = styled.div`
  border-radius: 50%;
  background-color: ${(avarage) => handleColorType(avarage)};
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.m};
  font-weight: 700;
`;
