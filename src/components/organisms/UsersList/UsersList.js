import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (succses) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succses) {
        resolve([...usersData]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    console.log('Jestem w UseEffect');
    setLoadingState(true);
    mockAPI(true)
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const fitleredUsers = users.filter((user) => user.name !== name);
    setUsers(fitleredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users Liss'}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
