
import React from 'react';
import Song from '../Song/Song';
import "./SearchBar.css"

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="search" value={props.title} placeholder="Song Title" />
                </div>
                <div>
                    <input type="search" value={props.album} placeholder="Song Album" />
                </div>
                <div>
                    <input type="search" value={props.artist} placeholder="Song Artist" />
                </div>
                <div>
                    <input type="search" value={props.genre} placeholder="Song Genre" />
                </div>
            </div>
        </form>
     );
}
 
export default SearchBar;