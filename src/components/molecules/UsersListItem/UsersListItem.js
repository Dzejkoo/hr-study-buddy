import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Button from 'components/atoms/button/Button';
import { UserAvarage } from 'components/atoms/UserAvarge/UserAvarage';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UsersListItem = ({ deleteUser, userData: { avarge, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <UserAvarage avarge={avarge} />
      <UserInfo name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarge: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
