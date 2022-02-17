
import React, { useState, Fragment } from 'react';
import EditableRow from '../EditableRow/EditableRow';
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import "./DisplayMusic.css";

const DisplayMusic = ({ deleteSong, parentSongs }) => {

    const [editSongID, setEditSongID] = useState(null);

    function handleEditClick(event, song) {
        event.preventDefault();
        setEditSongID(song.id);
    }

    async function editSongData() {

    }

    return ( 
        <form>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {parentSongs.map((song, i) => {
                    return (
                        <Fragment>
                        {editSongID === song.id ? (
                        <EditableRow song={song} editSongData={editSongData} i={i} /> 
                        ) : (
                        <ReadOnlyRow i={i} song={song} handleEditClick={handleEditClick} deleteSong={deleteSong} />
                        )}
                        </Fragment>
                    )})}
                </tbody>
            </table>
        </form>
     );
}
 
export default DisplayMusic;

