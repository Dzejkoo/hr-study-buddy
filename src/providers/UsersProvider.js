import React, { useState } from 'react';

export const UsersContext = React.createContext({
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // const [isLoading, setLoadingState] = useState([]);

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

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
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
