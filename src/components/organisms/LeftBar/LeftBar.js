import React from 'react';
import { Wrapper, Navigation, StyledLink } from './LeftBar.styles';
import StudyBuddyLogo from 'components/atoms/Logo/Logo';

const LeftBar = ({ Link }) => {
  return (
    <Wrapper>
      <StudyBuddyLogo />
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/add-user">Add User</StyledLink>
        <StyledLink to="/">Setting</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
      </Navigation>
    </Wrapper>
  );
};

export default LeftBar;
