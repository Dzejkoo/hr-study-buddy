import { useReducer } from 'react';

const cases = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CHECKED',
  throwError: 'THROW ERROR',
};

//Usereducer similar method like useState but in reducer we can change more information
const reducer = (state, action) => {
  //State and action - two attributesm STATE

  switch (action.type) {
    case cases.inputChange:
      //Set values from input
      return {
        ...state,
        [action.field]: action.value,
      };
    case cases.clearValues:
      return { ...action.initialValues };
    case cases.consentToggle:
      return { ...state, consent: !state.consent };
    case cases.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  //Hook
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    //Download new values from input and set them to formValues
    dispatch({
      type: cases.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: cases.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: cases.consentToggle });
  };

  const handleClearForm = () => {
    dispatch({ type: cases.clearValues, initialValues });
  };

  return {
    formValues,
    handleClearForm,
    handleToggleConsent,
    handleThrowError,
    handleInputChange,
  };
};
