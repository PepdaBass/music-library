
import React from 'react';


const EditableRow = ({ i, handleCancelClick, handleEditChange, editData }) => {


    return ( 
        <tr>
            <td><input type="text" name="title" value={editData.title} placeholder="Title..." onChange={handleEditChange} /></td>
            <td><input type="text" name="album" value={editData.album} placeholder="Album..." onChange={handleEditChange} /></td>
            <td><input type="text" name="artist" value={editData.artist} placeholder="Artist..." onChange={handleEditChange} /></td>
            <td><input type="text" name="genre" value={editData.genre} placeholder="Genre..." onChange={handleEditChange} /></td>
            <td><input type="date" name="release_date" value={editData.release_date} placeholder="Release date..." onChange={handleEditChange} /></td>
            <td><button type="submit" className="btn btn-outline-info btn-sm">SAVE</button></td>
            <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={handleCancelClick}>CANCEL</button></td>
        </tr>
     );
}
 
export default EditableRow;