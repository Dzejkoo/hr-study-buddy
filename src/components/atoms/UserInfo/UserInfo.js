import React from 'react';
import { StyledUserInfo } from './UserInfo.styles';

export const UserInfo = ({ name, attendance }) => (
  <StyledUserInfo>
    <p>{name}</p>
    <p>attendance: {attendance}</p>
  </StyledUserInfo>
);

export default UserInfo;
