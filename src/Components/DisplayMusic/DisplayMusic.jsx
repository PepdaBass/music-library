
import React from 'react';
import Song from '../CreateSong/CreateSong';
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
    return ( 
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th></th>
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
                    <td>{song.release_date}</td>
                    <td><button onClick={() => props.deleteSong(song.id)}>DELETE</button></td>
                </tr>
                )})}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;

