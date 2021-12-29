import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Input with button', () => {
  it('Renders the components', () => {
    renderWithProviders(<FormField label="name" name="name" id="name"></FormField>);
  });
});
