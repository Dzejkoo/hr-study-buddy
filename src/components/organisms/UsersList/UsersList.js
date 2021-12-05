import React from 'react';

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Student List'}</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
