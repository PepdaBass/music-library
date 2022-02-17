
import React, { useState } from 'react';


const EditableRow = ({ song, editSongData, i }) => {

    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");

    return ( 
        <tr key={i}>
            <td><input type="text" value={title} placeholder="Title..." onChange={(event) => setTitle(event.target.value)} /></td>
            <td><input type="text" value={album} placeholder="Album..." onChange={(event) => setAlbum(event.target.value)} /></td>
            <td><input type="text" value={artist} placeholder="Artist..." onChange={(event) => setArtist(event.target.value)} /></td>
            <td><input type="text" value={genre} placeholder="Genre..." onChange={(event) => setGenre(event.target.value)} /></td>
            <td><input type="date" value={release_date} placeholder="Release date..." onChange={(event) => setReleaseDate(event.target.value)} /></td>
            <td><button type="button" className="btn btn-outline-info btn-sm" onClick={() => editSongData(song.id)}>SAVE</button></td>
            <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={}>CANCEL</button></td>
        </tr>
     );
}
 
export default EditableRow;