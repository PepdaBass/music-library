

import React, { useEffect, useState } from 'react';
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
        <Song
        title = {title}
        album = {album}
        artist = {artist}
        genre = {genre}
        releaseDate = {releaseDate}
        />
     );
}
 
export default Song;