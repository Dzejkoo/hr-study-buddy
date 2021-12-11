import React from 'react';

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <>
      <StyledTitle>{isLoading ? 'Loading...' : 'Student List'}</StyledTitle>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
