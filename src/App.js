import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainHeroes from './components/MainHeros/MainHeroes';
import AboutHero from './components/AboutHero/AboutHero';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Comics from './Comics';
import AboutComics from './components/AboutComics/AboutComics';

function App() {
  const characters = useSelector((state) => state.characters);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [cards, setCards] = useState(9)
  const dispatch = useDispatch()
  
  function loadCards () {
    setCards(cards + 3)
    fetchData()
  }

  function handleImageClick(character) {
    setSelectedCharacter(character);
  }

  async function fetchData() {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=30&apikey=f36e8054b15f9fd7f9cdae5b06536757`);
    const data = await response.json();
    
    dispatch({
      type: "GET_SUCCES",
      payload: {
        characters: data.data.results
      }
    })
    
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" 
            element={<MainHeroes cards={cards} characters={characters} loadCards={loadCards} handleImageClick={handleImageClick} selectedCharacter={selectedCharacter} />} />
          <Route path='comics'
            element={<Comics />} />
          <Route path='comics/:id'
            element={<AboutComics />} />
          <Route path="/character/:id"  
            element={<AboutHero />} />
        </Routes>
      </div>
    )
}

export default App;
