import { Link } from "react-router-dom";
import "./aboutherolinks.css";
import thor_capitan from '../images/thor_capitan.png'
import { useSelector, } from "react-redux";
import { useEffect, useState } from "react";

const AboutHeroLinks = () => {
  const characters = useSelector(((state) => state.characters))
  const [selectedRandomCharacter, setSelectedRandomCharacter] = useState({});

  function handleRandomClick() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    setSelectedRandomCharacter(characters[randomIndex]);
  };

  useEffect(() => {
    setSelectedRandomCharacter(characters[1] || {});
  }, [characters]);

  return (
    <div className="blocks-random-heroes">
      <div className="block-left">
        {Object.keys(selectedRandomCharacter).length > 0 ? (
          <div className="about-hero">
            <div className="about-hero-flex">
              <img className="heroes-img-first-block" src={`${selectedRandomCharacter.thumbnail?.path}.${selectedRandomCharacter.thumbnail?.extension}`} />
              <div className="more-info">
                <h2 className="name-heroes">{selectedRandomCharacter.name}</h2>
                <p className="description">
                  {selectedRandomCharacter.description}
                </p>
                <div className="button-flex">
                  <Link to={`/character/${selectedRandomCharacter.id}`}>
                    <button className="homepage">Homepage</button>
                  </Link>
                  <Link to={selectedRandomCharacter.urls[1].url}>
                    <button className="wiki">Wiki</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="block-right">
        <div className="block-right-column">
          <div className="random-character">
            <p>Random character for today!</p>
            <p>Do you want to get to know him better?</p>
          </div>
          <div className="random-choose">Or choose another one</div>
          <div>
            <button className="try-it" onClick={handleRandomClick}>TRY IT</button>
          </div>
        </div>
        <div className="capitan-thor">
          <img className="thor_capitan-img" src={thor_capitan}/>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroLinks;
