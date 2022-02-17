
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    getAllSongs();
    }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
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
      <SearchBar parentSongs = {songs} />
    </div>
  );
}

export default App;
