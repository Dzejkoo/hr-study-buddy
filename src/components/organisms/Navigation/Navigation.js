import React from 'react';
import { Wrapper, StyledLink, Logo } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact="true" to="/group">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add User</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
