
import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';
import "./SearchBar.css"

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <div>
            <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <div className="song-search">
                    <div>
                        <input type="text" placeholder="Search song info..." onChange={(event) => props.handleSubmit(event.target.value)}/>
                    </div>
                </div>
            </form>
            </div>
            
            <div>
            <DisplayMusic parentSongs = {props.parentSongs}/>
            </div>
        </div>
     );
}
 
export default SearchBar;