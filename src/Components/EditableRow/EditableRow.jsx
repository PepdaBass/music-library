
import React, { useState } from 'react';


const EditableRow = ({ song, editSongData, i, handleCancelClick }) => {

    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");

    return ( 
        <tr key={i}>
            <td><input type="text" value={song.title} placeholder="Title..." onChange={(event) => setTitle(event.target.value)} /></td>
            <td><input type="text" value={song.album} placeholder="Album..." onChange={(event) => setAlbum(event.target.value)} /></td>
            <td><input type="text" value={song.artist} placeholder="Artist..." onChange={(event) => setArtist(event.target.value)} /></td>
            <td><input type="text" value={song.genre} placeholder="Genre..." onChange={(event) => setGenre(event.target.value)} /></td>
            <td><input type="date" value={song.release_date} placeholder="Release date..." onChange={(event) => setReleaseDate(event.target.value)} /></td>
            <td><button type="submit" className="btn btn-outline-info btn-sm" onClick={() => editSongData(song.id)}>SAVE</button></td>
            <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleCancelClick()}>CANCEL</button></td>
        </tr>
     );
}
 
export default EditableRow;