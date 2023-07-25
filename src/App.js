import logo from './logo.png';
import './App.css';
//import Home from './components/home/Home';
import Home1 from './components/home1/Home1';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [characters, setCharacters] = useState([]);
  async function getAllCharacters(){
    const allData= await axios.get("https://akabab.github.io/starwars-api/api/all.json");
   // console.log(allData)
    setCharacters(allData.data)
  }
  useEffect(()=>{
    getAllCharacters()
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home1 getAllCharacters={characters}></Home1>
        {/* <Home></Home> */}


      </header>
    </div>
  );
}

export default App;