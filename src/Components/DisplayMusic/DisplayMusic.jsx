
import React, { useState, Fragment, useEffect } from 'react';
import EditableRow from '../EditableRow/EditableRow';
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import axios from 'axios';
import "./DisplayMusic.css";

const DisplayMusic = ({ deleteSong, parentSongs, getAllSongs }) => {

    const [editSongID, setEditSongID] = useState(null);
    const [editData, setEditData] = useState({
        title: "",
        album: "",
        artist: "",
        genre: "",
        release_date: ""
    })

    function handleEditChange(event) {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editData};
        newFormData[fieldName] = fieldValue;
    
        setEditData(newFormData);
    }

    function handleEditClick(event, song) {
        event.preventDefault();
        setEditSongID(song.id);

        const editValues = {
            title: song.title,
            album: song.album,
            artist: song.artist,
            genre: song.genre,
            release_date: song.release_date
        }
        setEditData(editValues);
    }

    function handleCancelClick(event) {
        setEditSongID(null);
    }

    async function editSongData(event) {
        event.preventDefault();
        let editSong = {
            title : editData.title,
            album : editData.album,
            artist : editData.artist,
            genre : editData.genre,
            release_date : editData.release_date
        }
        console.log(editSong)
        let response = await axios.put(`http://127.0.0.1:8000/music/${editSongID}/`, editSong);
        console.log(response)
        if (response.status === 200) {
          await getAllSongs();
        }
        setEditSongID(null);
      }

      useEffect(() => {
          editSongData();
      }, [])

    return ( 
        <form onSubmit={(event) => editSongData(event)}>
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
                        <Fragment key={i}>
                        {editSongID === song.id ? (
                        <EditableRow editData={editData} handleEditClick={handleEditClick} i={i} handleCancelClick={handleCancelClick} handleEditChange={handleEditChange} /> 
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