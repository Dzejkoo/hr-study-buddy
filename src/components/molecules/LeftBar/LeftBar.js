import React from 'react';
import { StyledLeftBar, Navigation } from './LeftBar.styles';
import StudyBuddyLogo from 'components/atoms/Logo/Logo';

const LeftBar = ({ Link }) => {
  return (
    <StyledLeftBar>
      <StudyBuddyLogo />
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/add-user">Add User</Link>
      </Navigation>
    </StyledLeftBar>
  );
};

export default LeftBar;
