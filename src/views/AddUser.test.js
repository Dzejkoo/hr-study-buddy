import React from 'react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Input with button', () => {
  it('Renders the components', () => {
    //Render element with extensions providers
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    //"Make the same move like user" that is complete label and sumbit
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '2.8' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });
});
