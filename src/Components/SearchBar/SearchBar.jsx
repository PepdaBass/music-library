
import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';
import "./SearchBar.css"

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    function filterSongData(data) {
        let filterList = props.parentSongs.filter((data) => props.parentSongs.data.includes(data));
        return filterList;
    }


    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="search" value={props.parentSongs.title} placeholder="Search song list..." onChange={(event) => filterSongData(event.target.value)}/>
                </div>
            </div>
        </form>
        

        <DisplayMusic parentSongs = {props.parentSongs}/>
        </div>
     );
}
 
export default SearchBar;