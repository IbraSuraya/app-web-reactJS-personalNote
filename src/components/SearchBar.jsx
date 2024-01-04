import React from "react";

function SearchBar(){
  return (
    <div className="search-bar">
      <input 
        id="search-name"
        name="search-name"
        className="search-name"
        placeholder="Cari berdasarkan judul ..."
        type="text" />
    </div>
  );
};

export default SearchBar;