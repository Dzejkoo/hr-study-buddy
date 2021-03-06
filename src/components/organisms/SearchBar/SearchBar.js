import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <input />
    </SearchBarWrapper>
  );
};
