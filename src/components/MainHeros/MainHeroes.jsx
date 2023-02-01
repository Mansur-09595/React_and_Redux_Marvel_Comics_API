import RandomHero from "../RandomHero/RandomHero";
import HeroesCard from "./HeroesCard";
import vision from '../images/vision.png'
import './mainhero.css'

const MainHeroes = ({
  cards,
  characters,
  loadCards,
  handleImageClick,
  selectedCharacter,
  selectedRandomCharacter,
  handleRandomClick,
}) => {
  return (
    <div className="wrapper">
      <RandomHero selectedRandomCharacter={selectedRandomCharacter} handleRandomClick={handleRandomClick}/>

      <div className="block-flex">
        <div className="marvel-carts">
          {characters.slice(0, cards).map((item) => (
            <div className="marvel-cart" key={item.id}>
              <img className="heroes-img" onClick={() => handleImageClick(item)} src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}/>
              <div className="heroes-name">{item.name}</div>
            </div>
          ))}
          <button className="load-more" onClick={loadCards}>LOAD MORE</button>
        </div>

        <HeroesCard selectedCharacter={selectedCharacter} />
      </div>
      <div className="vision">
        <img src={vision}/>
      </div>
    </div>
  );
};

export default MainHeroes;
