
import React, { useState, useEffect } from 'react';
import "./SearchBar.css"

const SearchBar = (props) => {

   const [search, setSearch] = useState("");
   const [filteredSongs, setFilteredSongs] = useState([]);

   function handleSubmit(event) {
       event.preventDefault();
   }

    return ( 
        <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="search" value={search} placeholder="Search song info..." onChange={(event) => setSearch(event.target.value)}/>
                </div>
            </div>
        </form>
        </div>
     );
}
 
export default SearchBar;