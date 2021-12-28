import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users, deleteUser, isLoading } = useContext(UsersContext);
  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Student List'}</Title>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
