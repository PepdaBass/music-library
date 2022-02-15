
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
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

  return (
    <div>
      <SearchBar parentSongs = {songs} />
    </div>
  );
}

export default App;
