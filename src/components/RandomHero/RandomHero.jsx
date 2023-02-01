import AboutHeroLinks from "../AboutHero/AboutHeroLinks";

const RandomHero = ({ selectedRandomCharacter, handleRandomClick }) => {
    return (
        <AboutHeroLinks selectedRandomCharacter={selectedRandomCharacter} handleRandomClick={handleRandomClick}/>   
    );
  };
  
  export default RandomHero;