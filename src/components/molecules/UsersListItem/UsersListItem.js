import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styled';
import Button from 'components/atoms/button/Button';
import { UserAvarage } from 'components/atoms/UserAvarge/UserAvarage';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UsersListItem = ({ userData: { avarge, name, attendance = '0%' } }) => (
  <Wrapper>
    <UserAvarage avarge={avarge} />
    <UserInfo name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarge: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
