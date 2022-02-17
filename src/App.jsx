
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    getAllSongs();
    }, [])

  useEffect(() => {
    deleteSong();
  }, [])

  useEffect(() => {
    postNewSong();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  async function deleteSong(songs){
    let response = await axios.delete(`http://127.0.0.1:8000/music/${songs}/`);
    console.log(response)
    if (response.status === 204) {
      await getAllSongs();
    }
  }



  async function postNewSong(newSong){
    console.log(newSong)
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    console.log(response)
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  function addNewSong(song){
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }


  // const searchData = (value, type) => {
  //   songs.filter((value) => {
  //     if (search == "") {
  //       return value;
  //     }
  //     else if (value.type.toLowerCase().includes(search.toLowerCase())) {
  //       return value;
  //     }
  //   }).map((value, i) => {
  //     return value.type;
  //   })
  //   return setSearch(value.type);
  // }



  return (
    <div>
      <NavBar />
      <SearchBar />
      <CreateSong parentSongs = {songs} postNewSong = {postNewSong} />
      <DisplayMusic parentSongs = {songs} deleteSong = {deleteSong}/>
    </div>
  );
}

export default App;
