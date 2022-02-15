
import React from 'react';
import axios from 'axios';
import Song from '../Song/Song';
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
    return ( 
        <div>
            {props.parentSongs.map((song, i) => {
                return (
                    <Song key={i} title={song.title} album={song.album} artist={song.artist} genre={song.genre} releaseDate={song.releaseDate}/>
                )
            })}
        </div>
     );
}
 
export default DisplayMusic;

