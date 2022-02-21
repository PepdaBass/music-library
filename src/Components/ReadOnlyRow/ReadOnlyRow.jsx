import React from 'react';

const ReadOnlyRow = ({ song, deleteSong, handleEditClick, i }) => {



    return ( 
        <tr key={i}>
            <td>{song.title}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td><button type="button" className="btn btn-outline-info btn-sm" onClick={(event) => handleEditClick(event, song)}>EDIT</button></td>
            <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => deleteSong(song.id)}>DELETE</button></td>
        </tr>
     );
}
 
export default ReadOnlyRow;