
import React from 'react';
import "./SearchBar.css"

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="text" placeholder="Search song info..." onChange={(event) => props.handleSubmit(event.target.value)}/>
                </div>
            </div>
        </form>
        </div>
     );
}
 
export default SearchBar;