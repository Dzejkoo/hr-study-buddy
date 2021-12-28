import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

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

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  useEffect(() => {
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
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
        isLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
