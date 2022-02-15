
import React from 'react';
import Song from '../Song/Song';
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song, i) => {
                return (
                <tr key={i}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.releaseDate}</td>
                </tr>
                )})}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;

