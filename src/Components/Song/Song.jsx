

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Song.css"


const Song = (props) => {

    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    useEffect(() => {
        setTitle(props.title);
        setAlbum(props.album);
        setArtist(props.artist);
        setGenre(props.genre);
        setReleaseDate(props.releaseDate); 
    }, [])


    return ( 
        <div className="song-info">
            <div className="song-title">
                <h4>{title}</h4>
            </div>
            <div className="song-album">
                <h4>{album}</h4>
            </div>
            <div className="song-artist">
                <h4>{artist}</h4>
            </div>
            <div className="song-genre">
                <h4>{genre}</h4>
            </div>
            <div className="song-release-date">
                <h4>{releaseDate}</h4>
            </div>
        </div>
     );
}
 
export default Song;