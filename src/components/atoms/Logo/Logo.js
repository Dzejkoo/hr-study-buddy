import React from 'react';
import styled from 'styled-components';

const StyledStudyBuddyLogo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    width: 60%;
    margin-left: auto;
    padding: 10px 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    text-align: right;
    line-height: 117%;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StudyBuddyLogo = () => {
  return (
    <StyledStudyBuddyLogo>
      <h1>Study Buddy</h1>
    </StyledStudyBuddyLogo>
  );
};

export default StudyBuddyLogo;
