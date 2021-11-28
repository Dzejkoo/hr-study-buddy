import React from 'react';
import { StyledUserInfo } from './UserInfo.styled';

export const UserInfo = ({ name, attendance }) => (
  <StyledUserInfo>
    <p>{name}</p>
    <p>attendance: {attendance}</p>
  </StyledUserInfo>
);

export default UserInfo;
