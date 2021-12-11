import LeftBar from 'components/organisms/LeftBar/LeftBar';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <LeftBar />
      {children}
    </Wrapper>
  );
};
