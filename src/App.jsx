
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs();
    }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }


  function filterSongs(value) {
    let searchList = [];
    searchList.push(songs.filter(songs.title.value));
    searchList.push(songs.filter(songs.album.value));
    searchList.push(songs.filter(songs.artist.value));
    searchList.push(songs.filter(songs.genre.value));
    searchList.push(songs.filter(songs.releaseDate.value));
    return searchList;
  }

  return (
    <div>
      <NavBar />
      <SearchBar parentSongs = {songs} filterSongs = {filterSongs}/>
    </div>
  );
}

export default App;
