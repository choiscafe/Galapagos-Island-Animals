import React from "react";

function Search ({ searchTerm, setSearchTerm }){

  return(
    <div className="searchbar">
      <label htmlFor="search">SEARCH:</label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

  )
}
export default Search