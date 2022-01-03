import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { UsersContext } from 'providers/UsersProvider';

//Started object values
const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

//Usereducer similar method like useState but in reducer we can change more information
const reducer = (state, action) => {
  //State and action - two attributesm STATE
  console.log(action);

  switch (action.type) {
    case 'INPUT CHANGE':
      //Set values from input
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CLEAR VALUES':
      return initialFormState;
    default:
      return state;
  }
};

const AddUser = () => {
  //Hook
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  //"Import" function by useContext from another file
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    //Download new values from input and set them to formValues
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    //Adding new values to our users list
    handleAddUser(formValues);

    //set Initial form values - clear input
    dispatch({ type: 'CLEAR VALUES' });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
