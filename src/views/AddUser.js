import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

//Started object values
const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  //"Import" function by useContext from another file
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleClearForm, handleToggleConsent, handleThrowError, handleInputChange } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (formValues.consent) {
      //Adding new values to our users list
      handleAddUser(formValues);

      //set Initial form values - clear input
      handleClearForm(initialFormState);
    } else {
      //Throw error
      handleThrowError('You need to give consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" onChange={handleToggleConsent}></FormField>
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
