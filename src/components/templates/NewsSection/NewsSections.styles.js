import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 45px;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const AricleWrapper = styled(ViewWrapper)`
  margin: 25px 0;
  padding: 40px;
  width: 100%;
  border-radius: 12px;
  max-width: unset;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
