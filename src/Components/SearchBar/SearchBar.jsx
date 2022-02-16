
import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';
import "./SearchBar.css"

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="search" id="mySearch" name="q" placeholder="Search song list..." onChange={(event) => props.filterSongs(event.target.value)}/>
                </div>
            </div>
        </form>
        

        <DisplayMusic parentSongs = {props.parentSongs}/>
        </div>
     );
}
 
export default SearchBar;