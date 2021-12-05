import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import { UserAvarage } from 'components/atoms/UserAvarge/UserAvarage';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <UserAvarage average={average} />
      <UserInfo name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
