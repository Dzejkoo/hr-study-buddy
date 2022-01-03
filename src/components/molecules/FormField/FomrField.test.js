import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input with button', () => {
  it('Renders the components', () => {
    renderWithProviders(<FormField label="name" name="name" id="name"></FormField>);
  });
});
