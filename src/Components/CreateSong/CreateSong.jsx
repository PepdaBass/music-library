

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
            <form onSubmit={postNewSong}>
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div>
                        <label>Album</label>
                        <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
                    </div>
                    <div>
                        <label>Artist</label>
                        <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
                    </div>
                    <div>
                        <label>Release Date</label>
                        <input type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Add New Song</button>
                    </div>
                </div>
            </form>
        </div>
        
        
     );
}
 
export default CreateSong;