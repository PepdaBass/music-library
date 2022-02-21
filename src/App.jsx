
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
    release_date: ""
  })
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    }, [])

  function handleFormChange(event) {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...formData};
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
}

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  async function deleteSong(songs, event){
    event.preventDefault();
    let response = await axios.delete(`http://127.0.0.1:8000/music/${songs}/`);
    console.log(response)
    if (response.status === 204) {
      await getAllSongs();
    }
  }



  return (
    <div>
      <NavBar />
      <SearchBar parentSongs={songs} filteredSongs={filteredSongs} search={search} setSearch={setSearch} setFilteredSongs={setFilteredSongs} />
      <CreateSong setFormData={setFormData} formData={formData} getAllSongs={getAllSongs} handleFormChange={handleFormChange} />
      <DisplayMusic filteredSongs={songs} deleteSong={deleteSong} getAllSongs={getAllSongs} />
    </div>
  );
}

export default App;
