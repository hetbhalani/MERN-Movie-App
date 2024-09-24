import React, { useContext } from 'react';
import { SearchContext } from '../SearchContext';

function Card() {
  const { searchValue } = useContext(SearchContext);

  return (
    <div>
      <p>The current search value is: {searchValue}</p>
    </div>
  );
}

export default Card;