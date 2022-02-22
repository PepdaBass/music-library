import React from 'react';

const ReadOnlyRow = ({ song, deleteSong, handleEditClick }) => {



    return ( 
        <tr>
            <td>{song.title}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td><button type="button" className="btn btn-outline-info btn-sm" onClick={(event) => handleEditClick(song, event)}>EDIT</button></td>
            <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={(event) => deleteSong(song.id, event)}>DELETE</button></td>
        </tr>
     );
}
 
export default ReadOnlyRow;