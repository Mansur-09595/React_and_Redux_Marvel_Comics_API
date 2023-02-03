import RandomHero from "../RandomHero/RandomHero";
import HeroesSelected from "./HeroesSelected";
import HeroesCard from "./HeroesCard";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import vision from '../images/vision.png'
import "./heroescards.css";

const HeroesCards = () => {
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
    <div className="wrapper">
      <RandomHero />

      <div className="block-flex">
        <div className="marvel-carts">
          {characters.slice(0, cards).map((item) => (
            <HeroesCard item={item} handleImageClick={handleImageClick}/>
          ))}
          <button className="load-more" onClick={loadCards}>LOAD MORE</button>
        </div>

        <HeroesSelected selectedCharacter={selectedCharacter} />
      </div>
        <img className="vision" src={vision} alt="vision-img"/>
    </div>
  );
};

export default HeroesCards;
