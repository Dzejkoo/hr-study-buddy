import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};
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

const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    console.log(newUser);
    setFormValues(initialFormState);
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange}></AddUser>} />
              <Route path="/" element={<Dashboard isLoading={isLoading} deleteUser={deleteUser} users={users} tittle="User's list" />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
