

import React, { useEffect, useState } from 'react';
import "./CreateSong.css"


const CreateSong = (props) => {

    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title : title,
            album : album,
            artist : artist,
            genre : genre,
            release_date : release_date
        }
        return newSong;
    }

    useEffect(() => {
        setTitle(props.title);
        setAlbum(props.album);
        setArtist(props.artist);
        setGenre(props.genre);
        setReleaseDate(props.release_date); 
    }, [])


    return ( 
        <div>
            <form onSubmit={() => props.postNewSong(() => handleSubmit)}>
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