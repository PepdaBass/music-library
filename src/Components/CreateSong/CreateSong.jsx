

import React, { useEffect } from 'react';
import axios from 'axios';
import "./CreateSong.css"


const CreateSong = ({ formData, getAllSongs, handleFormChange }) => {

    async function postNewSong(event){
        event.preventDefault();
        let newSong = {
            title : formData.title,
            album : formData.album,
            artist : formData.artist,
            genre : formData.genre,
            release_date : formData.release_date
        }
        console.log(newSong)
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        console.log(response)
        if (response.status === 201) {
          await getAllSongs();
        }
      }


    return ( 
        <div>
            <form className="form-group bg-dark" onSubmit={(event) => postNewSong(event)}>
                <div className="create-new-song">
                    <div className="flex-item">
                        <input type="text" name="title" placeholder="Title..." onChange={handleFormChange} />
                    </div>
                    <div className="flex-item">
                        <input type="text" name="album" placeholder="Album..." onChange={handleFormChange} />
                    </div>
                    <div className="flex-item">
                        <input type="text" name="artist" placeholder="Artist..." onChange={handleFormChange} />
                    </div>
                    <div className="flex-item">
                        <input type="text" name="genre" placeholder="Genre..." onChange={handleFormChange} />
                    </div>
                    <div className="flex-item">
                        <input type="date" name="release_date" placeholder="Release date..." onChange={handleFormChange} />
                    </div>
                    <div className="flex-item">
                        <button className="btn btn-outline-success"type="submit">Add New Song</button>
                    </div>
                </div>
            </form>
        </div>
        
        
     );
}
 
export default CreateSong;