import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { avarge, name, attendance = '0%' } }) => (
  <li>
    <div>{avarge}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarge: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
