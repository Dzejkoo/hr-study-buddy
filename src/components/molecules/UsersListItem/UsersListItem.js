import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import { UserAvarage } from 'components/atoms/UserAvarge/UserAvarage';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <UserAvarage average={average} />
      <UserInfo name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
