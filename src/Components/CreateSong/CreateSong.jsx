

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CreateSong.css"


const CreateSong = (props) => {

    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");

    async function postNewSong(event){
        event.preventDefault();
        let newSong = {
            title : title,
            album : album,
            artist : artist,
            genre : genre,
            release_date : release_date
        }
        console.log(newSong)
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        console.log(response)
        if (response.status === 201) {
          await props.getAllSongs();
        }
      }

      useEffect(() => {
        postNewSong();
      }, [])



    return ( 
        <div>
            <form className="form-group bg-dark" onSubmit={postNewSong}>
                <div className="create-new-song">
                    <div className="flex-item">
                        <input type="text" value={title} placeholder="Title..." onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div className="flex-item">
                        <input type="text" value={album} placeholder="Album..." onChange={(event) => setAlbum(event.target.value)} />
                    </div>
                    <div className="flex-item">
                        <input type="text" value={artist} placeholder="Artist..." onChange={(event) => setArtist(event.target.value)} />
                    </div>
                    <div className="flex-item">
                        <input type="text" value={genre} placeholder="Genre..." onChange={(event) => setGenre(event.target.value)} />
                    </div>
                    <div className="flex-item">
                        <input type="date" value={release_date} placeholder="Release date..." onChange={(event) => setReleaseDate(event.target.value)} />
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