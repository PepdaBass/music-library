
import React from 'react';
import Song from '../Song/Song';
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
    return ( 
        <Song title={props.title} album={props.album} artist={props.artist} genre={props.genre} releaseDate={props.releaseDate}/>
     );
}
 
export default DisplayMusic;

