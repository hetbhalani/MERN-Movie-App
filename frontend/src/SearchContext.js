import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    console.log(e);
  };

  return (
    <SearchContext.Provider value={{ searchValue, handleSearchChange, handleSearchSubmit }}>
      {children}
    </SearchContext.Provider>
  );
};