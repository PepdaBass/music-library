
import React, { useEffect } from 'react';
import "./SearchBar.css"

const SearchBar = ({ parentSongs, search, setSearch, setFilteredSongs }) => {

    function handleSubmit(event) {
        event.preventDefault();
        filterMusic();
    }

    function filterMusic(){
        let searchResults = parentSongs.filter((song) => {
            if(song.title.includes(search) || song.album.includes(search) || song.artist.includes(search) || song.genre.includes(search) || song.release_date.includes(search)){
                return true;
            }
                 return false;
        })
        setFilteredSongs(searchResults);
    } 

    useEffect(() => {
        setFilteredSongs(parentSongs);
    },[parentSongs])

    return ( 
        <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <div className="song-search">
                <div>
                    <input type="text" value={search} placeholder="Search song info..." onChange={(event) => setSearch(event.target.value)}/>
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Search</button>
                </div>
            </div>
        </form>
        </div>
     );
}
 
export default SearchBar;