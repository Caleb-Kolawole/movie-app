import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Searchbar = () => {
  const { setSearchTerm } = useContext(AppContext);  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);  
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={handleSearch}  
      />
    </div>
  );
};

export default Searchbar;
