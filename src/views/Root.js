import React, { useEffect, useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import LeftBar from 'components/molecules/LeftBar/LeftBar';

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.ligthGrey};
`;

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
        <Wrapper>
          <LeftBar Link={Link} />
          <Routes>
            <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange}></Form>} />
            <Route path="/" element={<UsersList isLoading={isLoading} deleteUser={deleteUser} users={users} tittle="User's list" />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
