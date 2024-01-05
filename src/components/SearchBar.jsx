import React from "react";
import PropTypes from 'prop-types';

function SearchBar({keyword, keywordChange}){
  return (
    <div className="search-bar">
      <input 
        id="search-name"
        name="search-name"
        className="search-name"
        placeholder="Cari berdasarkan judul ..."
        type="text" 
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}/>
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;